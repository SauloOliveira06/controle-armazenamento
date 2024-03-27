import { Box, Button } from "@mui/material";
import styled from "styled-components";

export const CircularBox = styled(Box)`
  position: relative;
  display: inline-flex;

  span {
    width: 150px !important;
    height: 150px !important;
  }
`;

export const ButtonAction = styled(Button)`
  background-color: #1e7ab9 !important;
`;
