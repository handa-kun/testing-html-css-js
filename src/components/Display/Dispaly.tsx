import { Htag } from '../Htag/Htag';
import styles from './Display.module.css';
import { DisplayProps } from './Display.props';
import { ReactComponent as BubbleBotIcon } from './public/bubblesTop.svg';
import { ReactComponent as BubbleTopIcon } from './public/bubblesTop.svg';
import { ReactComponent as BoxIcon } from './public/box.svg';
import { ReactComponent as BoxMiniIcon } from './public/box2.svg';
import { ReactComponent as PhoneIcon } from './public/phone.svg';
import { ReactComponent as ProductIcon } from './public/product.svg';
import BerryIcon from './public/berry.svg';
import cn from 'classnames';
import { SwiperIcon } from './Swiper/Swiper';



export const Display = ({ children }: DisplayProps): JSX.Element => {
    return (
        <div className={styles.display}>
            <div className={styles.title}>
                <hr className={styles.line} />
                <Htag tag='UpperCase'>Lorem, ipsum dolor sit amet consectetur</Htag>
            </div>
            <div className={styles.product}>
                <BubbleBotIcon className={styles.bubblesBot} />
                <div className={styles.levels}>
                    <div className={styles.firstLevel}>
                        <div className={styles.item}>
                            <PhoneIcon />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className={styles.item}>
                            <BoxMiniIcon />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className={styles.secondLevel}>
                        <div className={styles.item}>
                            <BoxIcon />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <img src={BerryIcon} alt="Berry" className={styles.berry} />
                        <div className={styles.item}>
                            <ProductIcon />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className={styles.thirdLevel}>
                        <div className={styles.item}>
                            <PhoneIcon />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className={cn(styles.item, styles.item6)}>
                            <BoxMiniIcon />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                <BubbleTopIcon className={styles.bubblesTop} />
            </div>
            <SwiperIcon />
        </div>
    )
};