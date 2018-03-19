import { combineReducers } from 'redux';

import counter from '../components/Content/reducers';


// export default (state = {}, action) => ({
//     counter: counter(state.counter, action),
// });

export default combineReducers({
    counter
});
