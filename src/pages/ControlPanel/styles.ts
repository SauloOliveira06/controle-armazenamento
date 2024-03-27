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

export const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const SuccessAnimationContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;
