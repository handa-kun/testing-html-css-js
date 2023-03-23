import styles from './Advantage.module.css';
import { AdvantageProps } from './Advantage.props';
import { ReactComponent as ArrowIcon } from './../Advantage/arrow.svg';
import cn from 'classnames';
import { useState } from 'react';


export const Advantage = ({ children }: AdvantageProps): JSX.Element => {
    const [opened, setOpened] = useState<boolean>(false);

    function handleClick() {
        if (opened === false) {
            setOpened(true);
        } else {
            setOpened(false);
        }
    }

    return (
        <div className={styles.advantage} onClick={handleClick}>
            {children}
            <span className={cn(styles.title, {
                [styles.opened]: opened
            })}>Lorem ipsum, dolor sit amet adipisicing elit.</span>
            {<span className={cn(styles.arrow, {
                [styles.down]: !opened,
            })}>
                <ArrowIcon />
            </span>}
            <div className={cn(styles.description, {
                [styles.drop]: opened,
            })}>
                <p>
                    Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit
                    exercitationem laborum cupiditate magnam eaque quae delenit
                </p>
            </div>
        </div>
    )
};