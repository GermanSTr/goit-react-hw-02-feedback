import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          className={css.statsBut}
        >
          <span className={css.nameButton}>{option}</span>
        </button>
      ))}
    </div>
  );
};

export { FeedbackOptions };
