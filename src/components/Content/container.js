import React from "react";
import ContentView from './component';

import { connect } from 'react-redux';
import { resetCounter, increment, decrement, multiplyWith } from './actions';


// map redux store's state to component's props
const mapStateToProps = (state) => ({
    value: state.counter.value
});

// map dispatch to props
const mapDispatchToProps = (dispatch) => ({
    onResetCounter: () => dispatch(resetCounter()),
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onMultiplyWith: (value) => dispatch(multiplyWith(value)),
});

// connect mapStateToProps and mapDispatchToProps maps to ContentView
const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(ContentView);

export default ContentContainer;
