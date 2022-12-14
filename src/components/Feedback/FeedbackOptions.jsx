import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const FeedbackOptions = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) => {
  return (
    <div>
      <button
        className={css.feedback__btn}
        type="button"
        onClick={onIncrementGood}
      >
        Good
      </button>

      <button
        className={css.feedback__btn}
        type="button"
        onClick={onIncrementNeutral}
      >
        Neutral
      </button>

      <button
        className={css.feedback__btn}
        type="button"
        onClick={onIncrementBad}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onIncrementGood: PropTypes.func,
  onIncrementNeutral: PropTypes.func,
  onIncrementBad: PropTypes.func,
};
