import styles from './NavBar.module.css';
import { NavBarProps } from './NavBar.props';
import { useState } from 'react';

export const NavBar = ({ ...props }: NavBarProps): JSX.Element => {
    const [state, setState] = useState({
        activeObject: '',
        objects: ['NavItem1', 'NavItem2', 'NavItem3']
    });

    function toggleActive(index: number) {
        setState({ ...state, activeObject: state.objects[index] });
    }

    function toggleActiveStyle(index: number) {
        if (state.objects[index] === state.activeObject) {
            return styles.active;
        } else {
            return styles.item;
        }
    }

    return <div className={styles.nav}>
        {state.objects.map((el, idx) => (
            <a href="$#" key={idx} className={toggleActiveStyle(idx)} onClick={() => toggleActive(idx)}>
                {el}
            </a>
        ))}
    </div>
};