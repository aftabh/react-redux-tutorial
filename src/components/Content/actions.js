
import {
    RESET_COUNTER,
    INCREMENT,
    DECREMENT,
    MULTIPLY_WITH
} from './actions-type';


export const resetCounter = () => ( /* action */ {
    type: RESET_COUNTER
});

export const increment = () => ( /* action */ {
    type: INCREMENT
});

export const decrement = () => ( /* action */ {
    type: DECREMENT
});

export const multiplyWith = (value) => ( /* action */ {
    type: MULTIPLY_WITH,
    value
});
