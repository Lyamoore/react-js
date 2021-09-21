import { GET_GISTS, GET_GISTS_FAILURE, GET_GISTS_REQUEST, GET_GISTS_SUCCESS } from "./constants";

export const getGists = () => ({
    type: GET_GISTS,
});

export const getGistsRequest = () => ({
    type: GET_GISTS_REQUEST,
});

export const getGistsSuccess = (data) => ({
    type: GET_GISTS_SUCCESS,
    payload: data,
});

export const getGistsFailure = (err) => ({
    type: GET_GISTS_FAILURE,
    payload: err,
});