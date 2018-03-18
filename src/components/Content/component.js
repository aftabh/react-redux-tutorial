import React from "react";
import PropTypes from 'prop-types';

import './style.scss';


class ComponentView extends React.Component {
    render() {
        const {value, onIncrement, onDecrement} = this.props;

        return (
            <div className='content'>
                <span>Counter: {value}</span>

                <button onClick={onIncrement}>
                    increment
                </button>

                <button onClick={onDecrement}>
                    decrement
                </button>
            </div>
        );
    }
}

ComponentView.propTypes = {
  value:       PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default ComponentView;
