import { Box, Button } from "@mui/material";
import styled from "styled-components";

export const ContainerControlPanel = styled.div`
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0;
  }
`;

export const CircularBox = styled(Box)`
  position: relative;
  display: inline-flex;

  span {
    width: 150px !important;
    height: 150px !important;
  }
`;

export const ButtonAction = styled(Button)`
  background-color: #46d153 !important;
  border-radius: 20px !important;
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

export const ButtonCancel = styled(Button)`
  border-radius: 20px !important;
`;

export const ButtonDecline = styled(Button)`
  border-radius: 20px !important;
`;
