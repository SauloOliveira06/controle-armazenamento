import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Grid, Paper, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { ButtonAction } from "./styles";
import CustomModal from "../../components/modal";
import { CircularProgressWithLabel } from "../../components/CircularProgress";
import { StationProps } from "./types";

export const PainelDeControle = () => {
  const [openModal, setOpenModal] = useState(false);
  const [dataStation, setDataStation] = useState("");
  const [valueStation, setValueStation] = useState<number>();
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
        },
        {
          id: 2,
          nomeEstacao: "Estação 2",
          progress: 0,
          volume: 0,
        },
        {
          id: 3,
          nomeEstacao: "Estação 3",
          progress: 0,
          volume: 0,
        },
      ];
    }
  });

  const handleOpenModal = (event: string) => {
    setOpenModal(true);
    setDataStation(event);
  };

  const handleCloseModal = () => setOpenModal(false);

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
        },
        {
          id: 2,
          nomeEstacao: "Estação 2",
          progress: 0,
          volume: 0,
        },
        {
          id: 3,
          nomeEstacao: "Estação 3",
          progress: 0,
          volume: 0,
        },
      ];
      setStations(defaultStations);
      localStorage.setItem("stations", JSON.stringify(defaultStations));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("stations", JSON.stringify(stations));
  }, [stations]);

  return (
    <>
      <Grid sx={{ flexGrow: 1 }} container spacing={8} marginTop={10}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={8}>
            {stations.map((value, index) => (
              <Grid key={index} item>
                <Paper
                  sx={{
                    height: 340,
                    width: 400,
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  }}
                  children={
                    <>
                      <Box display={"flex"} margin={"1em auto auto 1em"}>
                        <Typography variant="h5" gutterBottom fontWeight={400}>
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
                          onClick={() => handleOpenModal(value.nomeEstacao)}
                        >
                          Aplicar Valor
                        </ButtonAction>
                      </Box>
                    </>
                  }
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <CustomModal
        open={openModal}
        onClose={handleCloseModal}
        title={`Informe o valor para ${dataStation}`}
        titleTooltip="Você deve informar o valor da porcentagem para a respectiva estação!"
        placement="bottom"
        content={
          <>
            <TextField
              id="value"
              type="number"
              label="Valor"
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
              <Button variant="outlined" onClick={handleCloseModal}>
                Cancelar
              </Button>
              <ButtonAction variant="contained" onClick={handleSubmitValue}>
                Aplicar
              </ButtonAction>
            </Box>
          </>
        }
      />
    </>
  );
};
