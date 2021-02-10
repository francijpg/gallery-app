import React, { FC } from "react";
import { GalleryImage } from "../../../../types/gallery";
import ButtonIcon from "../../../common/ButtonIcon";
import ModalImage from "../../../common/ModalImage";
import {
  StyledImageContainer,
  StyledIconHideImage,
  StyledIconDeleteImage,
} from "./GalleryModalStyle";

type Props = {
  imageData: GalleryImage;
  closeModal: () => void;
  hideImage: (imageData: GalleryImage) => void;
  userImages: GalleryImage[];
  deleteImage: (imageData: GalleryImage) => void;
};

const GalleryModal: FC<Props> = ({ imageData, closeModal, hideImage, userImages, deleteImage }) => {
  const { imageUrl, uploaderName } = imageData;

  return (
    <ModalImage url={imageUrl} alt={uploaderName} closeModal={closeModal}>
      <StyledImageContainer>
        <ButtonIcon clicked={() => hideImage(imageData)}>
          <StyledIconHideImage />
        </ButtonIcon>
        <ButtonIcon clicked={() => deleteImage(imageData)}>
          <StyledIconDeleteImage />
        </ButtonIcon>
      </StyledImageContainer>
    </ModalImage>
  );
};

export default GalleryModal;
