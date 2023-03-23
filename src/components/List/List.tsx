import styles from './List.module.css';
import { ListProps } from './List.props';
import { ReactComponent as Switch } from './public/switch.svg';
import { ReactComponent as Led } from './public/led.svg';
import { ReactComponent as LightsOff } from './public/lightsOff.svg';
import { ReactComponent as Splitter } from './public/splitter.svg';
import { ReactComponent as PowerOff } from './public/powerOff.svg';
import { useState } from 'react';
import { Advantage } from './Advantage/Advantage';


export const List = ({ className }: ListProps): JSX.Element => {

    return (
        <div className={styles.list}>
            <Advantage>
                <Switch />
            </Advantage>
            <Advantage>
                <Led />
            </Advantage>
            <Advantage>
                <LightsOff />
            </Advantage>
            <Advantage>
                <Splitter />
            </Advantage>
            <Advantage>
                <PowerOff />
            </Advantage>
        </div>
    )
};