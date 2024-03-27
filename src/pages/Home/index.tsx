import { Box, Button } from "@mui/material";
import { HomeContainer } from "./styles";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <HomeContainer>
        <img src={"/background-home.png"} />
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} paddingTop={'27%'}>
          <Link to="/painel-controle">
            <Button variant="contained" className="custom-button">Gerenciar</Button>
          </Link>
        </Box>
      </HomeContainer>
    </>
  );
};
