import { Button } from '../Button/Button';
import styles from './NavBar.module.css';
import { NavBarProps } from './NavBar.props';

export const NavBar = ({ children }: NavBarProps): JSX.Element => {
    return <nav className={styles.nav}>
        <Button appearance='link'>NavItem1</Button>
        <Button appearance='link'>NavItem2</Button>
        <Button appearance='button'>NavItem3</Button>
    </nav>
};