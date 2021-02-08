import React, { FC } from "react";
import Modal from "../Modal";
import { StyledImage } from "./ModalStyle";

export type ModalStyleProps = {
  opacity?: string;
};

export type ModalImageProps = {
  url: string;
  alt: string;
  closeModal: () => void;
  padding?: "xs" | "md";
};

const ModalImage: FC<ModalImageProps & ModalStyleProps> = ({
  url,
  alt,
  closeModal,
  opacity,
  children,
  padding,
}) => {
  return (
    <Modal onClose={closeModal} padding={padding}>
      <StyledImage src={url} alt={alt} opacity={opacity} />
      {children}
    </Modal>
  );
};

export default ModalImage;
