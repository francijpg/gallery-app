import React, { FC } from "react";
import { StyledWrapper, StyledImage } from "./CardImageStyle";

export type CardStyleProps = {
  size?: "xs" | "md";
};

interface CardProps {
  id?: string;
  image: string;
  alt: string;
  clicked: () => void;
};

const CardImage: FC<CardProps & CardStyleProps> = ({ id, image, alt, clicked, size="md" }) => {
  return (
    <StyledWrapper id={id} onClick={clicked} size={size} data-testid="card-image-item">
      <StyledImage src={image} alt={alt} size={size} />
    </StyledWrapper>
  );
};

export default CardImage;
