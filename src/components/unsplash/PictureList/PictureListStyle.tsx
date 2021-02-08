import styled from "styled-components";

export const StyledListWrapper = styled.ul`
  width: 100%;
  max-width: 1350px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(425px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  grid-gap: 20px 10px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
