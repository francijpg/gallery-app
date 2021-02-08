import React, { FC } from "react";
import ReactDOM from "react-dom";

import Button from "../Button";
import Modal from "../Modal";
import Title from "../Title";

import { StyledContent, StyledButtons } from "./AlertStyle";

interface AlertProps {
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  btnText: string;
  processText?: boolean;
  type?: "info" | "danger" | "success" | "warning";
  padding?: "xs" | "md";
}

const Alert: FC<AlertProps> = ({
  onClose,
  onSubmit,
  title,
  btnText,
  type,
  processText,
  children,
  padding,
}) => {
  const targetEl = document.getElementById("modal-root");
  let loadingText: string = "";

  switch (type) {
    case "info":
    case "success":
    case "warning":
      loadingText = "Loading...";
      break;
    case "danger":
      loadingText = "Deleting...";
      break;
    default:
      break;
  }

  const alert = (
    <Modal onClose={onClose} padding={padding}>
      <StyledContent>
        <Title as="h3" align="center">
          {title}
        </Title>
        <StyledButtons>
          <Button
            text={processText ? loadingText : btnText}
            colorType={type}
            disabled={processText}
            onClick={onSubmit}
          />
          <Button text="Cancel" onClick={onClose} />
        </StyledButtons>
      </StyledContent>
      {children}
    </Modal>
  );

  return targetEl ? ReactDOM.createPortal(alert, targetEl) : alert;
};

export default Alert;
