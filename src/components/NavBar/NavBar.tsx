import { Button } from '../Button/Button';
import styles from './NavBar.module.css';
import { NavBarProps } from './NavBar.props';

export const NavBar = ({ children }: NavBarProps): JSX.Element => {
    return <div className={styles.nav}>
        <Button appearance='link' className={styles.item}>NavItem1</Button>
        <Button appearance='link' className={styles.item}>NavItem2</Button>
        <Button appearance='button' className={styles.item}>NavItem3</Button>
    </div>
};