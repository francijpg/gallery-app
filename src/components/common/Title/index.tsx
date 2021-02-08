import React, { FC } from "react";
import { StyledHeading } from "./TitleStyle";

export interface TitleProps {
  as?: "h1" | "h2" | "h3" | "h4";
  color?: "white" | "black";
  align?: "left" | "center" | "right";
  className?: string;
}

const Title: FC<TitleProps> = ({
  as,
  color = "black",
  align = "left",
  className,
  children,
}) => {
  return (
    <StyledHeading
      as={as}
      color={color}
      align={align}
      className={className}
    >
      {children}
    </StyledHeading>
  );
};

export default Title;
