import { FC, ButtonHTMLAttributes } from "react";
import { StyledButton } from "./ButtonStyle";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
}

export type StyledButtonProps = {
  disabled?: boolean;
  block?: boolean;
  colorType?: "info" | "danger" | "success" | "warning";
};

const Button: FC<ButtonProps & StyledButtonProps> = ({
  text,
  className,
  onClick,
  type = "button",
  disabled = false,
  block = false,
  colorType,
}) => {
  return (
    <StyledButton
      type={type}
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
      block={block}
      colorType={colorType}
      data-testid="button"
    >
      {text}
    </StyledButton>
  );
};

export default Button;
