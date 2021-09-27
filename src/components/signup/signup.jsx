import { TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import {
  emailSelector,
  errorSelector,
  passwordSelector,
} from "../../store/authenticated/selectors";
import {
  addEmailAction,
  addPasswordAction,
  submitFirebaseThunkAction,
} from "../../store/authenticated/action";
import { ROUTES } from "../../routing/constants";

import "./signup.css";

export const Signup = () => {
  const dispatch = useDispatch();

  const password = useSelector(passwordSelector);
  const email = useSelector(emailSelector);
  const error = useSelector(errorSelector);

  const handleEmailChange = (e) => {
    dispatch(addEmailAction(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(addPasswordAction(e.target.value));
  };

  const handleSubmit = useCallback(() => {
    dispatch(submitFirebaseThunkAction({ email, password }));
  }, [dispatch, email, password]);

  return (
    <>
      <TextField
        label="Email"
        placeholder="Enter your email address"
        variant="outlined"
        value={email}
        type="email"
        onChange={handleEmailChange}
        style={{ marginBottom: "20px" }}
      />
      <TextField
        label="Password"
        placeholder="Enter your password"
        variant="outlined"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        style={{ marginBottom: "20px" }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
      <div className="Signup__link">
        <h3 className="Signup__title">Already registered?</h3>
        <Link to={ROUTES.LOGIN} className="Signup__btn">
          Login
        </Link>
      </div>
      {error && <h3 className="Signup__error">Error: {error}</h3>}
    </>
  );
};
