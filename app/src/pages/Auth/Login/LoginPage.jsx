import { useState } from "react";
import {
  TextField,
  Link,
  Button,
  Typography,
  useTheme,
  Alert,
  Stack,
} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import axios from "../../../services/axios";
import { ROUTES } from "../../../constants/routes";
import useToken from "../../../hooks/useToken";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setToken } = useToken();
  const [loginError, setLoginError] = useState();
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  /**
   * Handler for when the form is submitted.
   * Sends the request to the API Login route
   * and sets a token coming from the response.
   */
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(ROUTES.AUTH.LOGIN, data);
      setToken(response.data.data.token);
      return navigate("/");
    } catch (error) {
      setLoginError(error.response.data.message);
    }
  };

  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
      <Stack width="100%" spacing={0}>
        {/* Title */}
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: "800", fontSize: 28, paddingBottom: 2 }}
        >
          Login
        </Typography>

        {/* Email */}
        <Stack width="100%">
          {/* Email Input */}
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required.",
            }}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                label="Email"
                name="email"
                placeholder="Type your email"
                id="email"
                size="small"
                fullWidth
                type="email"
              />
            )}
          />

          {/* Email Error */}
          {errors?.email?.message && (
            <Stack direction="row" alignItems="center" spacing={1}>
              <ErrorIcon
                sx={{
                  color: theme.palette.error.main,
                  fontSize: 18,
                }}
              />

              <Typography
                sx={{ color: theme.palette.error.main, fontSize: 12 }}
              >
                {errors?.email?.message}
              </Typography>
            </Stack>
          )}
        </Stack>

        {/* Password */}
        <Stack direction="column" spacing={0} width="100%">
          {/* Password Input */}
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
            }}
            render={({ field }) => (
              <TextField
                {...field}
                margin="normal"
                label="Password"
                name="password"
                placeholder="Type your password"
                id="password"
                size="small"
                fullWidth
                type="password"
              />
            )}
          />

          {/* Password Error */}
          {errors?.password?.message && (
            <Stack alignItems="center" direction="row" spacing={1}>
              <ErrorIcon
                sx={{
                  color: theme.palette.error.main,
                  fontSize: 18,
                }}
              />

              <Typography
                sx={{
                  color: theme.palette.error.main,
                  fontSize: 12,
                }}
              >
                {errors?.password?.message}
              </Typography>
            </Stack>
          )}
        </Stack>
      </Stack>

      {/* Submit Button */}
      <Button type="submit" variant="contained" fullWidth sx={{ marginTop: 3 }}>
        Login
      </Button>

      {/* Submit Error */}
      {loginError && (
        <Alert severity="error" sx={{ marginTop: 3 }}>
          {loginError}
        </Alert>
      )}

      {/* Link to Register Page */}
      <Link
        to="/auth/register"
        component={NavLink}
        sx={{ fontSize: 12, marginTop: 2 }}
        margin={"normal"}
      >
        {"Don't have an account? Register here."}
      </Link>
    </form>
  );
};

export default LoginPage;
