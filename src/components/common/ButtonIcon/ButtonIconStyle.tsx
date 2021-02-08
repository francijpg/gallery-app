import styled, { css } from "styled-components";
import { StyledButtonProps } from "./";

export const StyledButton = styled.button<StyledButtonProps>`
  font-size: 5rem;
  background-color: transparent;
  color: #fff;
  border: none;
  cursor: pointer;
  outline: none;

  @media (max-width: 1400px) and (orientation: portrait) {
    bottom: -50px;
  }

  ${({ leftArrow }) =>
    leftArrow &&
    css`
      left: -80px;
      position: absolute;
      bottom: 50%;
      transform: translateY(50%);

      @media (max-width: 1400px) and (orientation: portrait) {
        left: 50%;
        transform: translate(-150%, 50%);
      }
    `}

  ${({ rightArrow }) =>
    rightArrow &&
    css`
      right: -80px;
      position: absolute;
      bottom: 50%;
      transform: translateY(50%);

      @media (max-width: 1400px) and (orientation: portrait) {
        right: 50%;
        transform: translate(150%, 50%);
      }
    `}
`;
