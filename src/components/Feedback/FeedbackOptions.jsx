import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.feedback__list}>
      {options.map(name => (
        <li key={name}>
          <button
            type="button"
            name={name}
            className={css.feedback__btn}
            onClick={onLeaveFeedback}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.elementType,
};
