import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statistics}>
      <h2>Statistic</h2>
      <p className={css.item}>
        Good: <span className={css.number}>{good}</span>
      </p>
      <p className={css.item}>
        Neutral: <span className={css.number}>{neutral}</span>
      </p>
      <p className={css.item}>
        Bad: <span className={css.number}>{bad}</span>
      </p>
      <p className={css.item}>
        Total: <span className={css.number}>{total}</span>
      </p>
      <p className={css.item}>
        Positive feedback:{' '}
        <span className={css.number}>{positivePercentage}%</span>
      </p>
    </div>
  );
};

export default Statistics;
