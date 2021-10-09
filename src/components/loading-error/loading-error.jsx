import { Button } from "@material-ui/core";

import "./loading-error.css";

export const LoadingError = ({ handleData, error }) => {
  return (
    <div className="Error">
      <h3 className="Error__title">{error}</h3>
      <Button
        className="Dogs__btn"
        variant="contained"
        color="secondary"
        onClick={handleData}
      >
        Update
      </Button>
    </div>
  );
};
