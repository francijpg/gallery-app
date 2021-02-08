import styled, { keyframes, css } from "styled-components";
import { Props } from "./index";
import image1 from "../../../assets/images/image1.jpg";

const rotate = keyframes`
  from {
    transform: translateX(-50%) rotate(0deg)
  }

  to {
    transform: translateX(-50%) rotate(360deg)
  }
`;

export const StyledLoadingSpinner = styled.div<Props>`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5rem;
  color: white;
  animation: ${rotate} 2s linear infinite;

  ${({ center }) =>
    center &&
    css`
      bottom: 50%;
      font-size: 4rem;
    `}
`;

export const StyledBackground = styled.div<Props>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: transparent;

  ${({ background }) =>
    background &&
    css`
      background-image: url(${image1});
      background-size: cover;
      background-position: center;
    `}
`;
