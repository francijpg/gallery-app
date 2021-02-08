import styled from "styled-components";

export const StyledOwnerData = styled.div`
  position: absolute;
  top: 15px;
  left: 20px;
  display: flex;
  align-items: center;
`;

export const StyledOwnerImage = styled.img`
  margin-right: 10px;
  height: 35px;
  width: 35px;
  border-radius: 50%;
`;

export const StyledOwnerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;

  @media (max-width: 800px) {
    padding: 2px;
    background-color: white;
    font-size: 0.7rem;
  }

  @media (max-height: 800px) {
    padding: 2px;
    background-color: white;
    font-size: 0.7rem;
  }
`;

export const StyledParagraph = styled.div`
  margin-left: 5px;
  font-weight: bold;
`;

export const StyledLikesInfo = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    padding: 2px;
    background-color: white;
    font-size: 0.7rem;
  }

  @media (max-height: 800px) {
    padding: 2px;
    background-color: white;
    font-size: 0.7rem;
  }
`;

export const StyledIconLikes = styled.i`
  color: green;
  margin-top: 2px;
`;

export const StyledLocationInfo = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    padding: 2px;
    background-color: white;
    font-size: 0.7rem;
  }

  @media (max-height: 800px) {
    padding: 2px;
    background-color: white;
    font-size: 0.7rem;
  }
`;

export const StyledDateInfo = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    padding: 2px;
    background-color: white;
    font-size: 0.7rem;
  }

  @media (max-height: 800px) {
    padding: 2px;
    background-color: white;
    font-size: 0.7rem;
  }
`;

export const StyledIconDate = styled.i`
  color: blue;
  margin-top: 2px;
  margin-right: 5px;
`;