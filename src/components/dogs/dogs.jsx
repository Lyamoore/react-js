import { Button } from "@material-ui/core";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  dogsSelector,
  errorSelector,
  loadingSelector,
} from "../../store/dogs-pic/selectors";
import { getDogsAction } from "../../store/dogs-pic/actions";
import { Loading } from "../loading";
import { LoadingError } from "../loading-error";

import "./dogs.css";

export const Dogs = () => {
  const dispatch = useDispatch();

  const dogs = useSelector(dogsSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);

  const handleData = useCallback(() => {
    dispatch(getDogsAction());
  }, [dispatch]);

  useEffect(() => {
    handleData();
  }, [handleData]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <LoadingError handleData={handleData} error={error} />;
  }

  return (
    <>
      <Button
        className="Dogs__btn"
        variant="contained"
        color="primary"
        onClick={handleData}
      >
        The next dog
      </Button>
      <img className="Dogs__image" src={dogs.message} alt="dog" />
    </>
  );
};
