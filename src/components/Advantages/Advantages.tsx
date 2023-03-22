import { Htag } from '../Htag/Htag';
import { List } from '../List/List';
import styles from './Advantages.module.css';
import { AdvantagesProps } from './Advantages.props';


export const Advantages = ({ ...props }: AdvantagesProps): JSX.Element => {
    return (
        <div className={styles.advantages}>
            <hr className={styles.line} />
            <div className={styles.title}>
                <Htag tag='Normal' >
                    Lorem ipsum, dolor sit adipisicing elit.
                </Htag>
                <p> Porro ab rerum omnis magnam eligendi error nobis dolore?</p>
            </div>
            <div className={styles.advantage}>
                <List />
            </div>
        </div>
    )
};