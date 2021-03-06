import {
  RETRIEVING_USER_INFO,
  RETRIEVED_USER_INFO,
  ERROR,
} from '../actions/user';
import { RETRIEVING_CREDIT, RETRIEVED_CREDIT } from '../actions/billing';

const initialState = {
  user: null,
  retrieving: false,
  retrieved: false,
  retrievingCred: false,
  retrievedCred: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVING_USER_INFO:
      return { ...state, retrieving: true, retrieved: false };

    case RETRIEVED_USER_INFO:
      return {
        ...state,
        retrieved: true,
        retrieving: false,
        user: action.payload.user,
      };

    case RETRIEVING_CREDIT:
      return { ...state, retrievingCred: true, retrievedCred: false };

    case RETRIEVED_CREDIT:
      console.log(action.payload);
      const user = {
        ...state.user,
        credits: (state.user.credits += action.payload),
      };
      return { ...state, retrievingCred: false, retrievedCred: true, user };

    case ERROR:
      return {
        ...state,
        retrieving: false,
        retrieved: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
