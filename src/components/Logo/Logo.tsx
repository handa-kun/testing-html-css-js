import { LogoProps } from './Logo.props';
import styles from './Logo.module.css';
import { Htag } from '../Htag/Htag';
import { ReactComponent as ArrowIcon } from './arrow.svg';

export const Logo = ({ ...props }: LogoProps): JSX.Element => {
    return (
        <div className={styles.wrapper_logo}>
            <div className={styles.title}>
                <Htag tag='Italic'>Product</Htag>
            </div>
            <ArrowIcon />
            <div className={styles.number}>
                <Htag tag='Italic'>24</Htag>
            </div>
        </div>
    )
};