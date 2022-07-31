import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import programerImg from "../../img/programer.png";
import {
    faCalendarDays,
    faHouse,
    faLocationDot,
    faUser,
    faAt,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
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
        hide: {
            opacity: 0,
            y: "50px",
        },
        hide2: {
            opacity: 0,
            y: "-50px",
        },
        hide3: {
            opacity: 0,
            x: `-50px`,
        },
    };

    const downloadHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className='about' id='about'>
            <div className='about_left'>
                <div className='about_heading'>
                    <motion.h2
                        initial='hide'
                        whileInView='visible'
                        variants={variants}
                    >
                        About Me
                    </motion.h2>
                </div>
                <motion.div
                    className='about_details'
                    initial='hide2'
                    custom={1}
                    whileInView='visible'
                    variants={variants}
                >
                    <span>
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                    <span>Lingadurai P</span>
                </motion.div>
                <motion.div
                    className='about_details'
                    initial='hide2'
                    custom={2}
                    whileInView='visible'
                    variants={variants}
                >
                    <span>
                        <FontAwesomeIcon icon={faCalendarDays} />
                    </span>
                    <span>18-12-1998</span>
                </motion.div>
                <motion.div
                    className='about_details'
                    initial='hide2'
                    custom={3}
                    whileInView='visible'
                    variants={variants}
                >
                    <span>
                        <FontAwesomeIcon icon={faHouse} />
                    </span>
                    <span>
                        103/B South Street, AddaimithippanKulam, Taruvai(P),
                        Tirunelveli, Tamilnadu
                    </span>
                </motion.div>
                <motion.div
                    className='about_details'
                    initial='hide2'
                    custom={4}
                    whileInView='visible'
                    variants={variants}
                >
                    <span>
                        <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                    <span>627356</span>
                </motion.div>
                <motion.div
                    className='about_details'
                    initial='hide2'
                    custom={5}
                    whileInView='visible'
                    variants={variants}
                >
                    <span>
                        <FontAwesomeIcon icon={faAt} />
                    </span>
                    <span>lingadurai033@gmail.com</span>
                </motion.div>

                <motion.div
                    className='about_details'
                    initial='hide2'
                    custom={6}
                    whileInView='visible'
                    variants={variants}
                >
                    <span>
                        <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <span>+91 9080422082</span>
                </motion.div>

                <motion.button
                    className='button downloading'
                    initial='hide3'
                    custom={7}
                    whileInView='visible'
                    variants={variants}
                    // onClick={downloadHandler}
                >
                    <a
                        href='https://drive.google.com/uc?id=1by5rLuCTvzOkP2eksmZJ_kJGG-jO_Hrg&export=download'
                        
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Download Cv
                    </a>
                </motion.button>
            </div>
            <div className='about_right'>
                <motion.img
                    src={programerImg}
                    alt=''
                    initial='hide'
                    whileInView='visible'
                    variants={variants}
                />
            </div>
        </div>
    );
};

export default About;
