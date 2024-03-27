import { Box } from "@mui/material";
import { HeaderComponent, Logo } from "./styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <HeaderComponent>
      <Logo>
        <Link to="/">
          <img src={"/recycle-5-svgrepo-com.svg"} alt="logo" />
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
        <Link to="/painel-controle">{t("control-panel")}</Link>
        <Link to="/configuracoes">{t("settings")}</Link>
      </Box>
    </HeaderComponent>
  );
};
