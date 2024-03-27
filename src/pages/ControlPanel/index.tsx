import { Grid, Paper } from "@mui/material";

export const PainelDeControle = () => {
  return (
    <>
      <Grid sx={{ flexGrow: 1 }} container spacing={8} marginTop={10}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={8}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <Paper
                  sx={{
                    height: 140,
                    width: 300,
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
