import styles from './Button.module.css';
import { ButtonProps } from './Button.props';


export const Button = ({ children }: ButtonProps): JSX.Element => {
    return <button className={styles.button}>
        {children}
    </button>
};