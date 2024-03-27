import { Box } from "@mui/material";
import { HeaderComponent, Logo } from "./styles";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderComponent>
      <Logo>
        <Link to="/">
          <img src={"/recycle-3-svgrepo-com.svg"} alt="logo" />
        </Link>
      </Logo>
      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        alignItems={"center"}
        gap={"20px"}
        width={"100%"}
        paddingRight={"30px"}
        className="content-link"
      >
        <Link to="/painel-controle">Painel de Controle</Link>
        <Link to="/historico">Histórico</Link>
        <Link to="/configuracoes">Configurações</Link>
      </Box>
    </HeaderComponent>
  );
};
