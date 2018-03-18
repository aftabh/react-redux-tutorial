import React from "react";
import ContentView from './component';

class ContentContainer extends React.Component {

    constructor(props) {
        super(props);

        const initialState = {
            value: 0,
        };

        this.state = initialState;
    }

    onIncrement() {
        const newState = {
            value: this.state.value + 1
        };

        this.setState(newState);
    }

    onDecrement() {
        const newState = {
            value: this.state.value - 1
        };

        this.setState(newState);
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
