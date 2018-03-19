import React from "react";
import ContentView from './component';

import { createStore } from 'redux';
import reducers from './reducers';


const store = createStore(reducers);


class ContentContainer extends React.Component {

    constructor(props) {
        super(props);

        const initialState = store.getState();

        this.state = initialState;
        this.dispatch = store.dispatch;

        // subscribe to store changes
        store.subscribe(() => this.onStoreChange());
    }

    onStoreChange() {
        const newState = store.getState();

        this.setState(newState);
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
