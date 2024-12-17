import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Link,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CloseIcon from "@mui/icons-material/Close";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./LoginSignupModal.css"; 

const LoginSignupModal = ({ handleClose }) => {
  const [isLogin, setIsLogin] = useState(true); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const toggleForm = () => setIsLogin(!isLogin);

  // Function to handle login
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Send the login data
      });

      const data = await response.json(); // Parse the JSON response
      if (response.ok) {
        const { id } = data; // Assuming 'id' is returned on successful login
        toast.success("Login successful!");
        navigate(`/home/${id}`); // Redirect to homepage with user ID
      } else {
        toast.error(data.message || "Invalid login credentials!");
      }
    } catch (error) {
      toast.error("An error occurred during login.");
    }
  };

  // Function to handle signup
  const handleSignup = async () => {
    if (password.length < 8) {
      setError(true);
      toast.error("Password is too weak!");
    } else {
      setError(false);
      try {
        const response = await fetch('http://localhost:8080/api/users/signup', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }), // Send the signup data
        });

        const data = await response.json(); // Parse the JSON response
        if (response.ok) {
          const { id } = data; // Assuming 'id' is returned on successful signup
          toast.success("Signup successful!");
          navigate(`/home/${id}`); // Redirect to homepage with user ID
        } else {
          toast.error(data.message || "Signup failed. Please try again!");
        }
      } catch (error) {
        toast.error("An error occurred during signup.");
      }
    }
  };

  return (
    <div className="login-signup-wrapper">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
      <div>
        <IconButton onClick={handleClose} className="close-button">
          <CloseIcon />
        </IconButton>
        <Paper elevation={6} className="form-paper">
          {isLogin ? (
            <div className="login-form">
              <Typography variant="h5" className="form-title">
                Login
              </Typography>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className="submit-button"
                onClick={handleLogin}
              >
                Login
              </Button>
            </div>
          ) : (
            <div className="signup-form">
              <Typography variant="h5" className="form-title">
                Sign Up
              </Typography>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                className="input-field"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FormControl variant="outlined" fullWidth className="input-field">
                <InputLabel>Password</InputLabel>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              {error && (
                <Typography color="error" className="error-text">
                  *Use a strong password
                </Typography>
              )}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className="submit-button"
                onClick={handleSignup}
              >
                Sign Up
              </Button>
            </div>
          )}
          <div className="form-switch">
            {isLogin ? (
              <Typography
                variant="body2"
                className="switch-link"
                onClick={toggleForm}
              >
                New here? <Link>Sign Up</Link>
              </Typography>
            ) : (
              <Typography
                variant="body2"
                className="switch-link"
                onClick={toggleForm}
              >
                Already a user? <Link>Login here</Link>
              </Typography>
            )}
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default LoginSignupModal;
