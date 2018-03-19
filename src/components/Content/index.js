import React from "react";

import './style.scss';


class Content extends React.Component {

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
            <div className='content'>
                <span>Counter: {value}</span>

                <button onClick={() => this.onIncrement()}>
                    increment
                </button>

                <button onClick={() => this.onDecrement()}>
                    decrement
                </button>
            </div>
        );
    }
}

export default Content;
