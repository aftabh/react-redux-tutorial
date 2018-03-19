import {
    RESET_COUNTER,
    INCREMENT,
    DECREMENT,
    MULTIPLY_WITH
} from './actions-type';


const initialState = {
    value: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_COUNTER:
      return initialState;

    case INCREMENT:
      return {
        value: state.value + 1
      };

    case DECREMENT:
      return {
        value: state.value - 1
      };

    case MULTIPLY_WITH:
      return {
        value: state.value * action.value
      };

    default:
      return state
  }
};
