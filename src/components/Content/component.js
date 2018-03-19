import React from "react";
import PropTypes from 'prop-types';

import './style.scss';


class ComponentView extends React.Component {
    render() {
        const {value, onIncrement, onDecrement, onMultiplyWith, onResetCounter} = this.props;

        return (
            <div className='content'>
                <span>Counter: {value}</span>

                <button onClick={onIncrement}>
                    increment
                </button>

                <button onClick={onDecrement}>
                    decrement
                </button>

                <button onClick={() => onMultiplyWith(2)}>
                    multiply with 2
                </button>

                <button onClick={onResetCounter}>
                    reset counter
                </button>
            </div>
        );
    }
}

ComponentView.propTypes = {
  value:       PropTypes.number.isRequired,
  onResetCounter: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onMultiplyWith: PropTypes.func.isRequired,
};

export default ComponentView;
