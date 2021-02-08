import styled from "styled-components";
import image1 from "../../../assets/images/image1.jpg";

export const StyledWrapper = styled.div`
  min-height: 100vh;
  background-image: url(${image1});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ::after {
    content: "";
    position: fixed;
    top: 80px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const StyleSectionWrapper = styled.section`
  width: 100%;
  max-width: 900px;
  display: flex;
  z-index: 10;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const StyleSectionItem = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;