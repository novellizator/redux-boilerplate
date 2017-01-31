import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import buildActionCreators from 'src/helpers/buildActionCreators';
import * as ActionTypes from 'src/constants/actionTypes';
import * as CounterSelectors from 'src/selectors/counterSelectors';

// import 'styles/counter.styl';

const Counter = ({ value, onDecrement, onIncrement }) => (
  <div className="counter">
    <button onClick={onDecrement}>-</button>
    <span>{value}</span>
    <button onClick={onIncrement}>+</button>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  value: CounterSelectors.getValue(state)
});

export default connect(
  mapStateToProps,
  buildActionCreators({
    onIncrement: ActionTypes.INCREMENT,
    onDecrement: ActionTypes.DECREMENT
  })
)(Counter);
