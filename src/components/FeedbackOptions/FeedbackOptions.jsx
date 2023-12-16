import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button onClick={evt => onLeaveFeedback(evt)} className={css.statsBut}>
        Good
      </button>
      <button onClick={evt => onLeaveFeedback(evt)} className={css.statsBut}>
        Neutral
      </button>
      <button onClick={evt => onLeaveFeedback(evt)} className={css.statsBut}>
        Bad
      </button>
    </div>
  );
};

export { FeedbackOptions };
