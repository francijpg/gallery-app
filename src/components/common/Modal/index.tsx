import React, { FC } from "react";

import {
  StyledModalWrapper,
  StyledContainer,
  StyledModalBackdrop,
} from "./ModalStyle";

export type ModalStyleProps = {
  padding?: "xs" | "md";
};

interface ModalProps {
  onClose: () => void;
}

const Modal: FC<ModalProps & ModalStyleProps> = ({
  onClose,
  padding,
  children,
}) => {
  return (
    <StyledModalWrapper>
      <StyledContainer padding={padding}>{children}</StyledContainer>
      <StyledModalBackdrop onClick={() => onClose()} />
    </StyledModalWrapper>
  );
};

export default Modal;
