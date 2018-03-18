import React from "react";
import ContentView from './component';

import { connect } from 'react-redux';

// map redux store's state to component's props
const mapStateToProps = (state) => ({
    value: state.value
});

// map dispatch to props
const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch( /* action */ {
        type: 'INCREMENT'
    }),

    onDecrement: () => dispatch( /* action */ {
        type: 'DECREMENT'
    }),
});

// connect mapStateToProps and mapDispatchToProps maps to ContentView
const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(ContentView);

export default ContentContainer;
