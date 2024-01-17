import styles from './Button.module.scss';

const Button = ({ name, action }) => {
    
    const handleClick = e => {
        e.preventDefault();
        if(action) action();
    };
    
    return (
        <button className={styles.button} onClick={handleClick}> {name} </button>
    );
}

export default Button;