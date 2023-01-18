import styled from "styled-components";

export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: nowrap;
  margin: 0;
  overflow: auto;

  @media (min-width: 840px) {
    flex-wrap: wrap;
  }
`;
