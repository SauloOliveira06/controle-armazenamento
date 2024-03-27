import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  background-color: #afe1af;
  height: auto;
  width: 100%;
  top: 0;
  left: 0;

  .content-link {
    a {
      text-decoration: none;
      font-size: 18px;
      color: #1e7ab9;
      font-weight: 600;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  background: #1e7ab9;
  width: 20%;
  clip-path: polygon(0 0, 90% 0, 100% 100%, 0% 100%);
  cursor: pointer;

  img {
    width: 45px;
    margin-left: 1em;
  }
`;
