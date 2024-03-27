import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Alert, Button, Grid, Paper, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import {
  BackgroundOverlay,
  ButtonAction,
  ButtonCancel,
  ButtonDecline,
  ContainerControlPanel,
  SuccessAnimationContainer,
} from "./styles";
import CustomModal from "../../components/modal";
import { CircularProgressWithLabel } from "../../components/CircularProgress";
import Lottie from "react-lottie";
import successAnimationData from "../../assets/success-animation.json";
import { StationProps } from "./types";
import { useTranslation } from "react-i18next";

export const PainelDeControle = () => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);
  const [dataStation, setDataStation] = useState("");
  const [dataStationColeta, setDataStationColeta] = useState("");
  const [valueStation, setValueStation] = useState<number>();
  const [openModalPedidoColeta, setOpenModalPedidoColeta] = useState(false);
  const [coletaConfirmada, setColetaConfirmada] = useState(false);
  const [stations, setStations] = useState<StationProps[]>(() => {
    const savedStations = JSON.parse(localStorage.getItem("stations") || "[]");
    if (savedStations.length > 0) {
      return savedStations;
    } else {
      return [
        {
          id: 1,
          nomeEstacao: "Estação 1",
          progress: 0,
          volume: 0,
          dataStation: "Estação 1",
        },
        {
          id: 2,
          nomeEstacao: "Estação 2",
          progress: 0,
          volume: 0,
          dataStation: "Estação 2",
        },
        {
          id: 3,
          nomeEstacao: "Estação 3",
          progress: 0,
          volume: 0,
          dataStation: "Estação 3",
        },
      ];
    }
  });

  const handleOpenModal = (dataName: string) => {
    setOpenModal(true);
    setDataStation(dataName);
  };

  const handleOpenModalPedidoColeta = (dataName: string) => {
    setOpenModalPedidoColeta(true);
    setDataStationColeta(dataName);
  };

  const handleCloseModal = () => setOpenModal(false);
  const handleCloseModalColeta = () => setOpenModalPedidoColeta(false);

  const handleSubmitValue = () => {
    const updatedStations = stations.map((station) => {
      if (station.nomeEstacao === dataStation) {
        return {
          ...station,
          progress: valueStation || 0,
          volume: valueStation || 0,
        };
      }
      return station;
    });
    setStations(updatedStations);

    localStorage.setItem("stations", JSON.stringify(updatedStations));

    setOpenModal(false);
    setValueStation(0);
  };

  const handleUpdateColeta = (
    stationValue: number | undefined,
    dataStation: string
  ) => {
    const updatedStations = stations.map((station) => {
      if (station.nomeEstacao === dataStation) {
        return {
          ...station,
          progress: stationValue || 0,
          volume: stationValue || 0,
        };
      }
      return station;
    });
    setStations(updatedStations);

    localStorage.setItem("stations", JSON.stringify(updatedStations));

    setOpenModalPedidoColeta(false);
    setValueStation(0);
  };

  useEffect(() => {
    const savedStations = JSON.parse(localStorage.getItem("stations") || "[]");
    if (savedStations.length > 0) {
      setStations(savedStations);
    } else {
      const defaultStations = [
        {
          id: 1,
          nomeEstacao: "Estação 1",
          progress: 0,
          volume: 0,
          dataStation: "Estação 1",
        },
        {
          id: 2,
          nomeEstacao: "Estação 2",
          progress: 0,
          volume: 0,
          dataStation: "Estação 2",
        },
        {
          id: 3,
          nomeEstacao: "Estação 3",
          progress: 0,
          volume: 0,
          dataStation: "Estação 3",
        },
      ];
      setStations(defaultStations);
      localStorage.setItem("stations", JSON.stringify(defaultStations));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("stations", JSON.stringify(stations));
  }, [stations]);

  const handleConfirmColeta = (dataStation: string) => {
    setColetaConfirmada(true);

    setTimeout(() => {
      setColetaConfirmada(false);
      handleUpdateColeta(valueStation, dataStation);
    }, 3000);
  };

  return (
    <ContainerControlPanel>
      <img src="/background-control-panel.png" alt="background-control" />
      <Grid sx={{ flexGrow: 1 }} container spacing={8} marginTop={10}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={8}>
            {stations.map((value, index) => (
              <Grid key={index} item>
                <Paper
                  sx={{
                    height: 340,
                    width: 300,
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    borderRadius: "20px",
                  }}
                  children={
                    <>
                      <Box display={"flex"} margin={"1em auto auto 1em"}>
                        <Typography
                          variant="h5"
                          gutterBottom
                          fontWeight={400}
                          color={"#5c5c5c"}
                        >
                          {value.nomeEstacao}
                        </Typography>
                      </Box>
                      <CircularProgressWithLabel value={value.progress} />
                      <Box
                        width={"100%"}
                        display={"flex"}
                        justifyContent={"center"}
                        gap={"30px"}
                        padding={"2em"}
                      >
                        <ButtonAction
                          variant="contained"
                          onClick={() => handleOpenModal(value.dataStation)}
                        >
                          {t("apply-value")}
                        </ButtonAction>
                      </Box>
                    </>
                  }
                />
                <Box marginTop={2}>
                  {value.volume >= 80 && (
                    <>
                      <Stack
                        sx={{ width: "100%" }}
                        spacing={2}
                        border={"1px solid #c1c1c1"}
                      >
                        <Alert severity="warning">{`Estação ${value.id} ${t(
                          "warning-message"
                        )}`}</Alert>
                      </Stack>
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        marginTop={1}
                      >
                        <Button
                          color="error"
                          variant="contained"
                          onClick={() =>
                            handleOpenModalPedidoColeta(value.dataStation)
                          }
                          fullWidth
                        >
                          {t("request-collect")}
                        </Button>
                      </Box>
                    </>
                  )}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <CustomModal
        open={openModal}
        onClose={handleCloseModal}
        title={`${t("enter-value")} ${dataStation}`}
        titleTooltip={t("info-the-value")}
        placement="bottom"
        content={
          <>
            <TextField
              id="value"
              type="number"
              label={t("value")}
              variant="outlined"
              value={valueStation || 0}
              onChange={(e) => setValueStation(parseFloat(e.target.value) || 0)}
              fullWidth
            />
            <Box
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"center"}
              gap={"20px"}
              paddingTop={4}
            >
              <ButtonCancel variant="outlined" onClick={handleCloseModal}>
                {t("cancel")}
              </ButtonCancel>
              <ButtonAction variant="contained" onClick={handleSubmitValue}>
                {t("apply")}
              </ButtonAction>
            </Box>
          </>
        }
      />
      <CustomModal
        open={openModalPedidoColeta}
        onClose={handleCloseModalColeta}
        title={`${t("confirm-collect")} ${dataStationColeta}?`}
        titleTooltip=""
        placement="bottom"
        showTooltip={false}
        content={
          <>
            <Box
              display={"flex"}
              justifyContent={"flex-end"}
              alignItems={"center"}
              gap={"20px"}
              paddingTop={4}
            >
              <ButtonDecline
                variant="contained"
                color="error"
                onClick={handleCloseModalColeta}
                fullWidth
              >
                {t("no")}
              </ButtonDecline>
              <ButtonAction
                variant="contained"
                onClick={() => {
                  handleUpdateColeta(valueStation, dataStationColeta);
                  handleConfirmColeta(dataStationColeta);
                }}
                fullWidth
              >
                {t("yes")}
              </ButtonAction>
            </Box>
          </>
        }
      />
      {coletaConfirmada && (
        <>
          <BackgroundOverlay />
          <SuccessAnimationContainer>
            <Lottie
              options={{
                loop: false,
                autoplay: true,
                animationData: successAnimationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              width={200}
              height={200}
            />
            <Typography
              variant="h3"
              gutterBottom
              fontWeight={400}
              color={"#FFFFFF"}
            >
              {t("success-collected")}
            </Typography>
          </SuccessAnimationContainer>
        </>
      )}
    </ContainerControlPanel>
  );
};
