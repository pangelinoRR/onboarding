import { TextField, Link, Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import axios from "../../../services/axios";
import { ROUTES } from "../../../constants/routes";
import useToken from "../../../hooks/useToken";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setToken } = useToken();
  const { control, handleSubmit } = useForm({
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
      console.error(error);
    }
  };

  return (
    <form className={classes.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <h3>Login</h3>

      {/* Email Input */}
      <Controller
        name="email"
        control={control}
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

      {/* Password Input */}
      <Controller
        name="password"
        control={control}
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

      {/* Submit Button */}
      <Button type="submit" variant="contained" fullWidth>
        Login
      </Button>

      {/* Link to Register Page */}
      <Link
        to="/auth/register"
        fontSize={12}
        marginTop={2}
        component={NavLink}
        margin={"normal"}
      >
        {"Don't have an account? Register here."}
      </Link>
    </form>
  );
};

export default LoginPage;
