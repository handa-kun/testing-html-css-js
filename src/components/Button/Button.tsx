import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

export const Button = ({ children, appearance }: ButtonProps): JSX.Element => {
    return <button className={cn(styles.button, {
        [styles.disable]: appearance === 'link'
    })}>
        <a href="$#">{children}</a>
    </button>
};