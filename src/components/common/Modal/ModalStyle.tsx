import styled, { css } from "styled-components";
import { ModalStyleProps } from "./";

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const StyledModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: zoom-out;
`;

export const StyledContainer = styled.div<ModalStyleProps>`
  padding: 0px;
  max-width: 80%;
  max-height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fff;
  z-index: 1;

  ${({ padding }) =>
    padding === "xs" &&
    css`
      padding: 30px 15px;

      @media (max-width: 800px) {
        padding: 5px;
        max-width: 90%;
      }

      @media (max-height: 800px) {
        padding: 5px;
      }

      @media (max-height: 800px) and (orientation: landscape) {
        padding: 5px;
        max-width: 70%;
      }
    `};

  ${({ padding }) =>
    padding === "md" &&
    css`
      padding: 60px 30px;

      @media (max-width: 800px) {
        padding: 10px;
        max-width: 90%;
      }

      @media (max-height: 800px) {
        padding: 10px;
      }

      @media (max-height: 800px) and (orientation: landscape) {
        padding: 10px;
        max-width: 70%;
      }
    `};
`;
