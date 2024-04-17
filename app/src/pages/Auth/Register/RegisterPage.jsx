import { TextField, Link, Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { axiosBasic } from "../../../services/axios";
import { ROUTES } from "../../../services/api/routes";
import useToken from "../../../hooks/useToken";
import classes from "./RegisterPage.module.css";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { setToken } = useToken();
  const { control, handleSubmit } = useForm({
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
      const response = await axiosBasic.post(ROUTES.AUTH.REGISTER, data);

      setToken(response.data.data.token);

      return navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className={classes.registerForm} onSubmit={handleSubmit(onSubmit)}>
      <h3>Register</h3>

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

      {/* Email Input */}
      <Controller
        name="name"
        control={control}
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
        Register
      </Button>

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
