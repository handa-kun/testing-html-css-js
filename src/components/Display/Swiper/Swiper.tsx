import styles from './Swiper.module.css';
import { SwiperProps } from './Swiper.props';
import { ReactComponent as BoxIcon } from './../public/box.svg';
import { ReactComponent as BoxMiniIcon } from '../public/box2.svg';
import { ReactComponent as PhoneIcon } from './../public/phone.svg';
import { ReactComponent as ProductIcon } from './../public/product.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const SwiperIcon = ({ className }: SwiperProps): JSX.Element => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings} className={styles.slider}>
            <div>
                <PhoneIcon />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <BoxMiniIcon />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <BoxIcon />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <ProductIcon />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <PhoneIcon />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
                <BoxMiniIcon />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </Slider>
    )
};

