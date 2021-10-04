import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useCallback, useState } from "react";

import { errorSelector } from "../../store/authenticated/selectors";
import { signInFirebaseThunkAction } from "../../store/authenticated/action";
import { ROUTES } from "../../routing/constants";
import { Input } from "../input";

import "./signin.css";

export const Signin = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const error = useSelector(errorSelector);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = useCallback(() => {
    dispatch(signInFirebaseThunkAction({ email, password }));
    setEmail("");
    setPassword("");
  }, [dispatch, email, password]);

  return (
    <div className="login">
      <div className="login__top">
        <Input
          label={"Email"}
          placeholder={"Enter your email address"}
          variant={"outlined"}
          value={email}
          type={"email"}
          onChange={handleEmailChange}
        />
        <Input
          label={"Password"}
          placeholder={"Enter your password"}
          variant={"outlined"}
          type={"password"}
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          className="login__btn"
        >
          Enter
        </Button>
      </div>
      {error && <h3 className="login__error">Error: {error}</h3>}
      <div className="login__under">
        <h3 className="login__title">Don't have an account?</h3>
        <div className="login__link">
          <Link to={ROUTES.SIGNUP}>Signup</Link>
        </div>
      </div>
    </div>
  );
};
