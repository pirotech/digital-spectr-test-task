import { USERS } from '../actionTypes';

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS: {
      return {
        ...state,
        users: [{ id: 0, name: 'John Doe' }],
      };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
