import styled, { keyframes } from "styled-components";
import image1 from "../../../assets/images/image1.jpg";

export const showIn = keyframes`
from {
  background-color: rgba(0, 0, 0, .7);
}

to {
  background-color: rgba(0, 0, 0, 0.8);
}
`;

export const StyledWrapper = styled.div`
  padding-left: calc(100vw - 100%);
  padding-top: 20px;
  padding-bottom: 100px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: rgba(0, 0, 0, 0.8);
  animation: ${showIn} 1s linear forwards;
`;

export const StyledHeadingWrapper = styled.div`
  width: 100%;
  max-width: 1350px;
  padding: 10px;
`;

export const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url(${image1});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;