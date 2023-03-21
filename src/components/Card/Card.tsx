import styles from './Card.module.css';
import { CardProps } from './Card.props';


export const Card = ({ children }: CardProps): JSX.Element => {
    return (
        <div className={styles.card}>
            {children}
            <p className={styles.description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
    )
};