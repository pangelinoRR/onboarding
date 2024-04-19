import {
  TextField,
  Link,
  Button,
  Stack,
  Typography,
  useTheme,
  Alert,
} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import axios from "../../../services/axios";
import { ROUTES } from "../../../constants/routes";
import useToken from "../../../hooks/useToken";
import { useState } from "react";

const RegisterPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [registerError, setRegisterError] = useState();
  const { setToken } = useToken();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  /**
   * Handler for when the form is submitted.
   * Sends the request to the API Register route
   * and sets a token coming from the response.
   */
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(ROUTES.AUTH.REGISTER, data);
      setToken(response.data.data.token);
      return navigate("/");
    } catch (error) {
      setRegisterError(error.response.data.message);
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
          Register
        </Typography>
      </Stack>

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

            <Typography sx={{ color: theme.palette.error.main, fontSize: 12 }}>
              {errors?.email?.message}
            </Typography>
          </Stack>
        )}
      </Stack>

      {/* Name */}
      <Stack width="100%">
        {/* Name Input */}
        <Controller
          name="name"
          control={control}
          rules={{
            required: "Name is required.",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              label="Name"
              name="name"
              placeholder="Type your name"
              id="name"
              size="small"
              fullWidth
              type="text"
            />
          )}
        />

        {/* Name Error */}
        {errors?.name?.message && (
          <Stack direction="row" alignItems="center" spacing={1}>
            <ErrorIcon
              sx={{
                color: theme.palette.error.main,
                fontSize: 18,
              }}
            />

            <Typography sx={{ color: theme.palette.error.main, fontSize: 12 }}>
              {errors?.name?.message}
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

      {/* Submit Button */}
      <Button type="submit" variant="contained" fullWidth>
        Register
      </Button>

      {/* Submit Error */}
      {registerError && (
        <Alert severity="error" sx={{ marginTop: 3 }}>
          {registerError}
        </Alert>
      )}

      {/* Link to Login Page */}
      <Link
        to="/auth/login"
        fontSize={12}
        marginTop={2}
        component={NavLink}
        margin={"normal"}
      >
        Already have an account? Click here to log in.
      </Link>
    </form>
  );
};

export default RegisterPage;
