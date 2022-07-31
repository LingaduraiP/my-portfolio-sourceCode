import React from "react";
import "./Project.css";
import { FaGithub } from "react-icons/fa";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { TbWorld } from "react-icons/tb";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { ProjectData } from "./ProjectData";

import { motion } from "framer-motion";

const Project = () => {
    const [count, setCount] = React.useState(0);
    const [showArrow, setShowArrow] = React.useState(true);

    const [hover, setHover] = React.useState(false);

    const windowFn = () => {
        if (window.innerWidth > 1200) {
            setCount(4);
            setShowArrow(true);
        }
        if (
            window.innerWidth > 600 &&
            window.innerWidth > 900 &&
            window.innerWidth < 1200
        ) {
            setCount(3);
            setShowArrow(true);
        }
        if (window.innerWidth > 600 && window.innerWidth < 900) {
            setCount(2);
            setShowArrow(true);
        }
        if (window.innerWidth < 600) {
            setShowArrow(false);
            setCount(1);
        }
    };

    React.useEffect(() => {
        windowFn();
    }, []);

    React.useEffect(() => {
        window.addEventListener("resize", windowFn);
        return () => window.removeEventListener("resize", windowFn);
    }, []);

    // animation
    const variants = {
        visible: (i) => ({
            y: 0,
            x: 0,
            opacity: 1,
            exit: { opacity: 0 },
            transition: {
                delay: i * 0.2,
                duration: 0.3,
            },
        }),
        hide1: {
            opacity: 0,
            y: "50px",
        },
        hide2: {
            opacity: 0,
            x: "-50px",
        },
    };

    const hoverFn = () => {
        setHover(true);
    };
    const leaveFn = () => {
        setHover(false);
    };

    return (
        <div className='project' id='project'>
            <motion.h2
                className='heading'
                initial='hide2'
                custom={1}
                whileInView='visible'
                variants={variants}
            >
                My Projects
            </motion.h2>
            <div className='card_container'>
                <Swiper
                    slidesPerView={count}
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={showArrow}
                    modules={[Pagination, Navigation]}
                    className='mySwiper'
                >
                    {ProjectData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='cards'>
                                <div className='flipcard'>
                                    <div
                                        className='flipcard_inner'
                                        onMouseEnter={hoverFn}
                                        onMouseLeave={leaveFn}
                                    >
                                        <div className='flipcard_front'>
                                            <motion.img
                                                src={item.img}
                                                alt=''
                                                initial='hide2'
                                                custom={1}
                                                whileInView='visible'
                                                variants={variants}
                                            />
                                            <motion.h2
                                                initial='hide2'
                                                custom={2}
                                                whileInView='visible'
                                                variants={variants}
                                            >
                                                {item.name}
                                            </motion.h2>
                                        </div>

                                        <div className='flipcard_back'>
                                            <motion.img
                                                src={item.img}
                                                alt=''
                                                initial='hide2'
                                                custom={1}
                                                whileInView={
                                                    hover ? "visible" : "hide2"
                                                }
                                                variants={variants}
                                            />
                                            <motion.h2
                                                initial='hide2'
                                                custom={2}
                                                whileInView={
                                                    hover ? "visible" : "hide2"
                                                }
                                                variants={variants}
                                            >
                                                {item.name}
                                            </motion.h2>
                                            <motion.p
                                                initial='hide2'
                                                custom={3}
                                                whileInView={
                                                    hover ? "visible" : "hide2"
                                                }
                                                variants={variants}
                                            >
                                                {item.usage}
                                            </motion.p>
                                            <div className='icons'>
                                                <motion.a
                                                    href={item.github}
                                                    initial='hide2'
                                                    custom={4}
                                                    whileInView={
                                                        hover
                                                            ? "visible"
                                                            : "hide2"
                                                    }
                                                    variants={variants}
                                                >
                                                    <FaGithub />
                                                </motion.a>
                                                <motion.a
                                                    href={item.url}
                                                    initial='hide2'
                                                    custom={5}
                                                    whileInView={
                                                        hover
                                                            ? "visible"
                                                            : "hide2"
                                                    }
                                                    variants={variants}
                                                >
                                                    <TbWorld />
                                                </motion.a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Project;
