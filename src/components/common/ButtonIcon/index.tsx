import React from "react";
import { StyledButton } from "./ButtonIconStyle";

export type StyledButtonProps = {
  leftArrow?: boolean;
  rightArrow?: boolean;
};

type Props = {
  clicked: () => void;
  children: React.ReactNode;
};

const ButtonIcon: React.FC<Props & StyledButtonProps> = ({
  clicked,
  children,
  leftArrow,
  rightArrow,
}) => (
  <StyledButton
    onClick={clicked}
    leftArrow={leftArrow}
    rightArrow={rightArrow}
    data-testid="button"
  >
    {children}
  </StyledButton>
);

export default ButtonIcon;
