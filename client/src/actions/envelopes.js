import axios from 'axios';

export const RETRIEVING_ENVELOPES = 'RETRIEVING_ENVELOPES';
export const RETRIEVED_ENVELOPES = 'RETRIEVED_ENVELOPES';

export const RETRIEVING_PROOF = 'RETRIEVING_PROOF';
export const RETRIEVED_PROOF = 'RETRIEVED_PROOF';

export const UPDATE_LOADING = 'UPDATE_LOADING';

export const ERROR = 'ERROR';

export const getEnvelopes = () => {
  const promise = axios.get(
    process.env.REACT_APP_ENVELOPES || 'http://localhost:9000/envelopes/all'
  );
  return dispatch => {
    dispatch({ type: RETRIEVING_ENVELOPES });
    promise
      .then(res => dispatch({ type: RETRIEVED_ENVELOPES, payload: res.data }))
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const getProof = id => {
  let promise;
  if (process.env.REACT_APP_CHAINPOINT) {
    promise = axios.get(`${process.env.REACT_APP_CHAINPOINT}/${id}`);
  } else {
    promise = axios.get(`http://localhost:9000/chainpoint/${id}`);
  }
  return dispatch => {
    dispatch({ type: RETRIEVING_PROOF, payload: id });
    promise
      .then(res => dispatch({ type: RETRIEVED_PROOF, payload: res.data }))
      .catch(err => dispatch({ type: ERROR, payload: err.response }));
  };
};

export const updateLoading = (id, changes) => {
  return dispatch => {
    return dispatch({ type: UPDATE_LOADING, payload: { id, changes } });
  };
};
