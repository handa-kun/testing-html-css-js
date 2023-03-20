import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
    switch (tag) {
        case 'Normal':
            return <h1 className={styles.h1}>{children}</h1>;
        case 'UpperCase':
            return <h1 className={styles.h1_upper}>{children}</h1>;
        case 'Italic':
            return <h1 className={styles.h1_italic}>{children}</h1>
        default:
            return <></>;
    }
};