import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Configuracoes = () => {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem("language");
    return storedLanguage || i18n.language;
  });

  const handleChangeLanguage = (event: SelectChangeEvent) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") || "";
    setLanguage(storedLanguage);
    i18n.changeLanguage(storedLanguage);
  }, [i18n, language]);

  return (
    <>
      <Grid sx={{ flexGrow: 1 }} container spacing={8} marginTop={10}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={8}>
            <Grid item>
              <Paper
                sx={{
                  height: "auto",
                  width: 900,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#282e34" : "#fff",
                  padding: 3,
                }}
                children={
                  <>
                    <Box>
                      <Typography variant="h5" gutterBottom fontWeight={400}>
                        {t("settings")}:
                      </Typography>
                      <Box width={"80%"} paddingTop={3} paddingLeft={4}>
                        <FormControl fullWidth>
                          <InputLabel id="select-language">
                            {t("select-language")}
                          </InputLabel>
                          <Select
                            labelId="select-language"
                            id="select-language"
                            value={language}
                            label={t("select-language")}
                            onChange={handleChangeLanguage}
                          >
                            <MenuItem value="en">Inglês</MenuItem>
                            <MenuItem value="pt">Português</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Box>
                  </>
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
