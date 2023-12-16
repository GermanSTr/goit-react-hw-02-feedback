import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p className={css.result}>Good:{good}</p>
      <p className={css.result}>Neutral:{neutral}</p>
      <p className={css.result}>Bad:{bad}</p>
      <p className={css.result}>Total:{total}</p>
      <p className={css.result}>Positive feedback:{positivePercentage}%</p>
    </div>
  );
};

export { Statistics };
