import { CircularProgress } from "@material-ui/core";

import "./loading.css";

export const Loading = () => {
  return (
    <div className="loading">
      <h3 className="loading__title">Loading...</h3>
      <CircularProgress />
    </div>
  );
};
