import { Advantages } from '../Advantages/Advantages';
import { Review } from '../Review/Review';
import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
    return <div className={styles.footer}>
        <Review />
        <Advantages />
    </div>
};