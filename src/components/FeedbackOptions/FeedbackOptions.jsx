import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <h1>Please leave feedback</h1>
      <button
        onClick={() => {
          onLeaveFeedback('good');
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          onLeaveFeedback('neutral');
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          onLeaveFeedback('bad');
        }}
      >
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
