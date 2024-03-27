import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  background-color: #afe1af;
  height: 60px;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  background: #1e7ab9;
  width: 30%;
  clip-path: polygon(0 0, 90% 0, 100% 100%, 0% 100%);

  img {
    width: 45px;
    margin-left: 1em;
  }
`;
