import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';

export const Footer = ({ children }: FooterProps): JSX.Element => {
    return <div className={styles.footer}>
        {children}
    </div>
};