import React, { FC, useState } from "react";
import { GalleryImage } from "../../../../types/gallery";
import CardImage from "../../../common/CardImage";
import PublicGalleryModal from "../PublicGalleryModal";
import { StyledListWrapper } from "./PublicGalleryListStyle";

type Props = {
  imagesArray: GalleryImage[];
};

const PublicGalleryList: FC<Props> = ({ imagesArray }) => {
  const [modalData, setModalData] = useState<GalleryImage | null>(null);

  const handleCloseModal = () => {
    setModalData(null);
  };

  const gallery = imagesArray.map((image) => (
    <CardImage
      key={image.id}
      id={image.id}
      image={image.imageUrl}
      alt={image.uploaderName}
      clicked={() => setModalData(image)}
      size="xs"
    />
  ));
  return (
    <StyledListWrapper>
      {gallery}
      {modalData && (
        <PublicGalleryModal
          imageData={modalData}
          closeModal={handleCloseModal}
        />
      )}
    </StyledListWrapper>
  );
};

export default PublicGalleryList;
