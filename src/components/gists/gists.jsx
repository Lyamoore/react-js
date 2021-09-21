import { CircularProgress } from "@material-ui/core";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectGists,
  selectGistsError,
  selectGistsLoading,
} from "../../store/gists/selectors";
import { getAllGists } from "../../store/gists/thunk";

export const GistsList = () => {
  const dispatch = useDispatch();

  const gists = useSelector(selectGists);
  const error = useSelector(selectGistsError);
  const loading = useSelector(selectGistsLoading);

  const requestGists = () => {
    dispatch(getAllGists());
  };

  useEffect(() => {
    requestGists();
  }, []);

  //   const renderGist = useCallback(
  //     (gist) => <li key={gist.id}>{gist.description}</li>,
  //     []
  //   );

  if (loading) {
    return <CircularProgress className="Loading" />;
  }

  if (error) {
    return (
      <>
        <h3>Error</h3>
        <button onClick={requestGists}>Retry</button>
      </>
    );
  }

  return <ul className="Gists-elem">{gists.map(renderGist)}</ul>;
};
