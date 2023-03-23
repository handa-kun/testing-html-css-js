import { Htag } from '../Htag/Htag';
import styles from './Review.module.css';
import { ReviewProps } from './Review.props';
import { ReactComponent as CommaIcon } from './comma.svg';
import UserIcon from './user.svg';


export const Review = ({ ...props }: ReviewProps): JSX.Element => {
    return <div className={styles.review}>
        <div className={styles.title}>
            <hr className={styles.line} />
            <Htag tag='Normal'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </Htag>
        </div>
        <div className={styles.user}>
            <img src={UserIcon} alt="Photo_User" />
            <div className={styles.commaTop} >
                <span><CommaIcon /></span>
                <span><CommaIcon /></span>
            </div>
            <p className={styles.description}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur
                animi  autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae deleniti, iste nisi
                expedita, provident excepturi officia!
                Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore?
            </p>
            <div className={styles.comma}>
                <span><CommaIcon /></span>
                <span><CommaIcon /></span>
            </div>
            <b className={styles.userName}>Jane Doe</b>
        </div>
        <div className={styles.reviews}>
            <div className={styles.block}>
                <div className={styles.block_description}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur
                        animi  autem aliquid
                    </p>
                    <b>Jane Doe</b>
                </div>
                <img src={UserIcon} alt="user" />
            </div>
            <div className={styles.block}>
                <img src={UserIcon} alt="user" />
                <div className={styles.block_description}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur
                        animi  autem aliquid
                    </p>
                    <b>Jane Doe</b>
                </div>
            </div>
        </div>
    </div>
};