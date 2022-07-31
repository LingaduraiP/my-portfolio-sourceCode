import React from "react";
import "./Education.css";
import { motion } from "framer-motion";

// images
import college from "../../img/College.png";
import school from "../../img/school.png";
// Swiper js

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Education = () => {
    const [show, setShow] = React.useState(true);

    // Navigation function

    const fnctn = () => {
        if (window.innerWidth < 600) {
            setShow(false);
        } else {
            setShow(true);
        }
    };

    React.useEffect(() => {
        fnctn();
    }, []);

    React.useEffect(() => {
        window.addEventListener("resize", () => fnctn());

        return () => window.removeEventListener("resize", () => fnctn());
    }, [window.innerWidth]);

    // animation
    const variants = {
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.2,
                duration: 0.3,
            },
        }),
        hide: {
            opacity: 0,
            y: "50px",
        },

        visible2: (i) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.2,
                duration: 0.3,
            },
        }),

        hide2: {
            opacity: 0,
            x: "-50px",
        },
    };

    return (
        <div className='education' id='education'>
            <h2>My Educations</h2>

            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                grabCursor={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={show}
                modules={[Pagination, Navigation]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <div className='edu'>
                        <div className='left'>
                            <motion.img
                                src={college}
                                alt=''
                                className='image img'
                                initial='hide2'
                                whileInView='visible2'
                                variants={variants}
                                custom={1}
                            />
                        </div>
                        <div className='right'>
                            <div className='college'>
                                <motion.span
                                    className='std'
                                    initial='hide2'
                                    whileInView='visible2'
                                    variants={variants}
                                    custom={1}
                                >
                                    B.E , ECE
                                </motion.span>
                                <motion.span
                                    className='schoolName'
                                    initial='hide2'
                                    whileInView='visible2'
                                    variants={variants}
                                    custom={2}
                                >
                                    SCAD College of Engineering and Technology
                                </motion.span>
                                <motion.span
                                    initial='hide2'
                                    whileInView='visible2'
                                    variants={variants}
                                    custom={3}
                                >
                                    Cheranmahadevi, Tirunelveli, Tamil Nadu -
                                    627414
                                </motion.span>
                                <motion.span
                                    initial='hide2'
                                    whileInView='visible2'
                                    variants={variants}
                                    custom={4}
                                >
                                    6.2%
                                </motion.span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='edu'>
                        <div className='left'>
                            <motion.img
                                src={school}
                                alt=''
                                className='image img'
                                initial='hide2'
                                whileInView='visible2'
                                variants={variants}
                                custom={1}
                            />
                        </div>
                        <div className='right'>
                            <div className='college'>
                                <motion.span
                                    className='std'
                                    initial='hide2'
                                    whileInView='visible2'
                                    variants={variants}
                                    custom={1}
                                >
                                    12th
                                </motion.span>
                                <motion.span
                                    className='schoolName'
                                    initial='hide2'
                                    whileInView='visible2'
                                    variants={variants}
                                    custom={2}
                                >
                                    Government Higher Secondary School
                                </motion.span>
                                <motion.span
                                    initial='hide2'
                                    whileInView='visible2'
                                    variants={variants}
                                    custom={3}
                                >
                                    Munnirpallam, Tirunelveli, Tamil Nadu -
                                    627356
                                </motion.span>
                                <motion.span
                                    initial='hide2'
                                    whileInView='visible2'
                                    variants={variants}
                                    custom={4}
                                >
                                    57.33%
                                </motion.span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='edu'>
                        <div className='left'>
                            <motion.img
                                src={school}
                                alt=''
                                className='image img'
                                initial='hide2'
                                whileInView='visible2'
                                variants={variants}
                                custom={1}
                            />
                        </div>
                        <div className='right'>
                            <div className='college'>
                                <motion.span
                                    className='std'
                                    initial='hide2'
                                    whileInView='visible2'
                                    variants={variants}
                                    custom={1}
                                >
                                    10th
                                </motion.span>
                                <motion.span
                                    className='schoolName'
                                    initial='hide2'
                                    whileInView='visible2'
                                    variants={variants}
                                    custom={2}
                                >
                                    Government Higher Secondary School
                                </motion.span>
                                <motion.span
                                    initial='hide2'
                                    whileInView='visible2'
                                    variants={variants}
                                    custom={3}
                                >
                                    Munnirpallam, Tirunelveli, Tamil Nadu -
                                    627356
                                </motion.span>
                                <motion.span
                                    initial='hide2'
                                    whileInView='visible2'
                                    variants={variants}
                                    custom={4}
                                >
                                    79.6%
                                </motion.span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Education;
