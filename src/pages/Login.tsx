import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorPopup, successPopup } from "../components/Popup";

interface Prop {
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const Login = ({ setToken }: Prop) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogging, setIsLogging] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLogging(true);

    axios({
      url: "https://fakestoreapi.com/auth/login",
      method: "POST",
      data: {
        username: username,
        password: password,
      },
    })
      .then((res) => {
        setToken(res.data.token);
        localStorage.setItem("authToken", res.data.token);
        successPopup("Logged in successfully.");
        navigate("..", { replace: true });
        setIsLogging(false);
      })
      .catch((err) => {
        errorPopup(err.response.data);
        setIsLogging(false);
      });
  };

  return (
    <section className="login-page">
      <form className="container" onSubmit={handleLogin} data-aos="flip-left">
        <h1>Login</h1>
        <input
          className="input"
          placeholder="Username"
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="input"
          placeholder="Password"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="button-container">
          <input
            type="submit"
            value={isLogging ? "Logging in..." : "Submit"}
            disabled={isLogging}
            style={isLogging ? { pointerEvents: "none" } : undefined}
          ></input>
        </div>
      </form>
    </section>
  );
};

export default Login;
