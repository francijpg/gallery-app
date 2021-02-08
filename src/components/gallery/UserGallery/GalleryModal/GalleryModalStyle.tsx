import styled from "styled-components";
import { BiHide } from "react-icons/bi";
import { MdRemoveCircleOutline } from "react-icons/md";

export const StyledImageContainer = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: 0.5s ease;
  position: absolute;
  opacity: 0;
  
  &:hover {
    opacity: 1;
  }
`;

export const StyledIconHideImage = styled(BiHide)`
  font-size: 150px;
  color: yellow;

  @media screen and (max-width: 500px) {
    font-size: 80px;
  }
`;

export const StyledIconDeleteImage = styled(MdRemoveCircleOutline)`
  font-size: 150px;
  color: red;

  @media screen and (max-width: 500px) {
    font-size: 80px;
  }
`;