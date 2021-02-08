import styled, { css } from "styled-components";
import { ModalStyleProps } from ".";

export const StyledImage = styled.img<ModalStyleProps>`
  max-width: 100%;
  max-height: 100%;

  ${({ opacity }) =>
    opacity &&
    css`
      &:hover {
        opacity: 0.5;
      }
    `}
`;
