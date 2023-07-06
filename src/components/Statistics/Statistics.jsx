import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

export const Statistics = props => {
  return (
    <div className={css.qwe}>
      <span>Good: {props.good} </span>
      <span>Neutral: {props.neutral} </span>
      <span>Bad: {props.bad} </span>
      <span>Total:{props.total}</span>
      <span>Pacitive feedback:{props.positivePercentage}%</span>
    </div>
  );
};

Statistics.propTypes = {
  props: PropTypes.object
};
