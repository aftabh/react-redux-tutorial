import React from "react";
import ContentView from './component';


const initialState = {
    value: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                value: state.value + 1
            };

        case 'DECREMENT':
            return {
                value: state.value - 1
            };

        default:
            return state;
    }
};


class ContentContainer extends React.Component {

    constructor(props) {
        super(props);

        const initialState = reducer(undefined, {});

        this.state = initialState;
    }

    dispatch(action) {
        this.setState(prevState => reducer(prevState, action));
    }

    onIncrement() {
        this.dispatch( /* action */ {
            type: 'INCREMENT'
        });
    }

    onDecrement() {
        this.dispatch( /* action */ {
        	type: 'DECREMENT' 
        });
    }

    render() {
        const value = this.state.value;

        return (
            <ContentView
                value={value}
                onIncrement={() => this.onIncrement()}
                onDecrement={() => this.onDecrement()} />
        );
    }
}

export default ContentContainer;
