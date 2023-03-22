import styles from './List.module.css';
import { ListProps } from './List.props';
import { ReactComponent as ArrowIcon } from './public/arrow.svg';
import { ReactComponent as Switch } from './public/switch.svg';
import { ReactComponent as Led } from './public/led.svg';
import { ReactComponent as LightsOff } from './public/lightsOff.svg';
import { ReactComponent as Splitter } from './public/splitter.svg';
import { ReactComponent as PowerOff } from './public/powerOff.svg';
import cn from 'classnames';
import { useState } from 'react';


export const List = ({ className }: ListProps): JSX.Element => {
    const [opened, setOpened] = useState<boolean>(false);

    return (
        <div className={styles.list}>
            <div className={styles.check}>
                <Switch />
                <span className={styles.title}>Lorem ipsum, dolor sit amet adipisicing elit.</span>
                {<span className={cn(styles.arrow, {
                    [styles.down]: !opened,
                })}>
                    <ArrowIcon />
                </span>}
            </div>
            <p className={styles.description}>
                Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit
                exercitationem laborum cupiditate magnam eaque quae delenit
            </p>
            <div className={styles.check}>
                <Led />
                <span className={styles.title}>Lorem ipsum, dolor sit amet adipisicing elit.</span>
                {<span className={cn(styles.arrow, {
                    [styles.down]: !opened,
                })}>
                    <ArrowIcon />
                </span>}
            </div>
            <p className={styles.description}>
                Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit
                exercitationem laborum cupiditate magnam eaque quae delenit
            </p>
            <div className={styles.check}>
                <LightsOff />
                <div className={cn(className, {
                    [styles.opened]: !opened,
                })}>
                    <span className={styles.title}>Lorem ipsum, dolor sit amet adipisicing elit.</span>
                </div>
                {<span className={cn(styles.arrow, {
                    [styles.down]: opened,
                })}>
                    <ArrowIcon />
                </span>}
                <div className={cn(styles.description, {
                    [styles.drop]: !opened,
                })}>
                    <p>
                        Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit
                        exercitationem laborum cupiditate magnam eaque quae delenit
                    </p>
                </div>
            </div>
            <div className={styles.check}>
                <Splitter />
                <span className={styles.title}>Lorem ipsum, dolor sit amet adipisicing elit.</span>
                {<span className={cn(styles.arrow, {
                    [styles.down]: !opened,
                })}>
                    <ArrowIcon />
                </span>}
            </div>
            <p className={styles.description}>
                Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit
                exercitationem laborum cupiditate magnam eaque quae delenit
            </p>
            <div className={styles.check}>
                <PowerOff />
                <span className={styles.title}>Lorem ipsum, dolor sit amet adipisicing elit.</span>
                {<span className={cn(styles.arrow, {
                    [styles.down]: !opened,
                })}>
                    <ArrowIcon />
                </span>}
            </div>
            <p className={cn(styles.description, {
            })}>
                Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit
                exercitationem laborum cupiditate magnam eaque quae delenit
            </p>
        </div>
    )
};