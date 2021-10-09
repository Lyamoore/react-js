import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";

import { errorSelector } from "../../store/authenticated/selectors";
import { createUserFirebaseThunkAction } from "../../store/authenticated/action";
import { ROUTES } from "../../routing/constants";
import { Input } from "../input";

import "./signup.css";

export const Signup = () => {
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

  const handleSubmit = useCallback(() => {
    dispatch(createUserFirebaseThunkAction({ email, password }));
    setEmail("");
    setPassword("");
  }, [dispatch, email, password]);

  return (
    <>
      <div className="signup">
        <div className="signup__top">
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
            onClick={handleSubmit}
            className="signup__btn"
          >
            Submit
          </Button>
        </div>
        {error && <h3 className="signup__error">Error: {error}</h3>}
        <div className="signup__under">
          <h3 className="signup__title">Have an account?</h3>
          <div className="signup__link">
            <Link to={ROUTES.LOGIN}>Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};
