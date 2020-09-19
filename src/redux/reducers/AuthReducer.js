import {LOGIN} from '../constants/index';
const initialState = {
  loggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        loggedIn: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default authReducer;
