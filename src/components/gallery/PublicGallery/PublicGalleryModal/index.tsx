import React, { FC } from "react";
import { GalleryImage } from "../../../../types/gallery";

import ModalImage from "../../../common/ModalImage";

type Props = {
  imageData: GalleryImage;
  closeModal: () => void;
};

const PublicGalleryModal: FC<Props> = ({ imageData, closeModal }) => {
  const { imageUrl, uploaderName } = imageData;
  return (
    <ModalImage url={imageUrl} alt={uploaderName} closeModal={closeModal}></ModalImage>
  );
};

export default PublicGalleryModal;
