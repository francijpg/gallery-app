import styled, { css } from "styled-components";
import { CardStyleProps } from ".";

export const StyledWrapper = styled.li<CardStyleProps>`
  width: 100%;
  justify-self: center;
  text-align: center;
  cursor: zoom-in;

  ${({ size }) =>
    size === "xs" &&
    css`
      max-width: 250px;

      @media (max-width: 800px) {
        max-width: 200%;
      }
    `};

  ${({ size }) =>
    size === "md" &&
    css`
      max-width: 425px;
    `};
`;

export const StyledImage = styled.img<CardStyleProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s;

  :hover {
    transform: scale(1.05);
  }

  @media (max-width: 500px) {
    width: 80%;
  }

  ${({ size }) =>
    size === "xs" &&
    css`
      max-height: 230px;
    `};

  ${({ size }) =>
    size === "md" &&
    css`
      max-height: 400px;
    `};
`;
