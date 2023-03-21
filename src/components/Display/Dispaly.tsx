import { Card } from '../Card/Card';
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
                        <Card className={styles.firstItem}>
                            <PhoneIcon />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </Card>
                        <Card>
                            <BoxMiniIcon />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </Card>
                    </div>
                    <div className={styles.secondLevel}>
                        <Card>
                            <BoxIcon />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </Card>
                        <img src={BerryIcon} alt="Berry" />
                        <Card>
                            <ProductIcon />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </Card>
                    </div>
                    <div className={styles.thirdLevel}>
                        <Card>
                            <PhoneIcon />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </Card>
                        <Card>
                            <BoxMiniIcon />
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </Card>
                    </div>
                </div>
                <BubbleTopIcon className={styles.bubblesTop} />
            </div>
        </div>
    )
};