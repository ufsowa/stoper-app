import styles from './Timer.module.scss';

const Timer = ({ time }) => {
    return (
    <div className={styles.clock}>
        {new Date(time).toISOString().slice(11, 23)}
    </div>
    );
};

export default Timer;