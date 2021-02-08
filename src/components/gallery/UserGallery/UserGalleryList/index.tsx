import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteImage, privateImage } from "../../../../redux/thunks/Gallery";
import { GalleryImage } from "../../../../types/gallery";
import Alert from "../../../common/Alert";
import CardImage from "../../../common/CardImage";
import GalleryModal from "../GalleryModal";
import { StyledListWrapper } from "./UserGalleryListStyle";

type Props = {
  imagesArray: GalleryImage[];
};

const UserGalleryList: FC<Props> = ({ imagesArray }) => {
  const [modalData, setModalData] = useState<GalleryImage | null>(null);

  const [showDeleteImageAlert, setShowDeleteImageAlert] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [deleting, setDeleting] = useState(false);

  const dispatch = useDispatch();

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

  const handlePrivacity = (userArr: GalleryImage[], image: GalleryImage) => {
    dispatch(privateImage(userArr, image));
  };

  const handleDelete = (image: GalleryImage) => {
    setShowDeleteImageAlert(true);
    setSelectedImage(image);
  };

  const deleteImageHandler = () => {
    if (selectedImage) {
      setDeleting(true);
      dispatch(
        deleteImage(imagesArray, selectedImage, () => {
          setModalData(null);
          setDeleting(false);
          setShowDeleteImageAlert(false);
        })
      );
    }
  };

  return (
    <StyledListWrapper>
      {gallery}
      {modalData && (
        <GalleryModal
          imageData={modalData}
          userImages={imagesArray}
          closeModal={handleCloseModal}
          hideImage={handlePrivacity}
          deleteImage={handleDelete}
        />
      )}
      {showDeleteImageAlert && (
        <Alert
          title="Are you sure you want to delete this image?"
          btnText="Delete"
          type={"danger"}
          onClose={() => setShowDeleteImageAlert(false)}
          onSubmit={deleteImageHandler}
          processText={deleting}
        />
      )}
    </StyledListWrapper>
  );
};

export default UserGalleryList;
