import { Outlet } from "react-router-dom";
import { Box, Divider, Stack, Typography } from "@mui/material";

const AuthLayout = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
    >
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: "16px",
          padding: 4,
          minHeight: "256px",
          maxHeight: "75%",
          overflowY: "auto",
          width: "40%",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "divider",
          "@media only screen and (max-width: 1024px)": { width: "66%" },
          "@media only screen and (max-width: 768px)": { width: "75%" },
          "@media only screen and (max-width: 600px)": { width: "90%" },
        }}
      >
        <Typography
          align="center"
          sx={{ marginBottom: 2, fontSize: 32, fontWeight: "bold" }}
        >
          Onboarding App
        </Typography>

        <Divider orientation="horizontal" variant="middle" flexItem />

        <Stack sx={{ marginTop: 2 }}>
          <Outlet />
        </Stack>
      </Box>
    </Stack>
    // <div className={classes.wrapper}>
    //   <div className={classes.formBox}>
    //     <h1>Onboarding App</h1>

    //     <Divider orientation="horizontal" variant="middle" flexItem />

    //     <Outlet />
    //   </div>
    // </div>
  );
};

export default AuthLayout;
