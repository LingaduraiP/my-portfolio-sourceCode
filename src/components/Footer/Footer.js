import React from "react";
import "./Footer.css";
import logo from "../../img/logo2.png";
import { FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    // animation
    const variants = {
        visible: (i) => ({
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.2,
                duration: 0.3,
            },
        }),
        hide: {
            opacity: 0,
           x: "50px",
        },

        hide2: {
            opacity: 0,
            x: "-50px",
        },
    };

    return (
        <div className='footer'>
            <div className='hr'></div>
            <div className='img'>
                <motion.img
                    src={logo}
                    alt=''
                    initial='hide2'
                    whileInView='visible'
                    variants={variants}
                    custom={1}
                />
            </div>
            <div className='icons'>
                <motion.a
                    href='https://api.whatsapp.com/send?phone=919080422082&text=Hi'
                    initial='hide'
                    whileInView='visible'
                    variants={variants}
                    custom={3}
                >
                    <FaWhatsapp />
                </motion.a>

                <motion.a
                    href='https://www.linkedin.com/in/lingadurai-p-971b53218/'
                    initial='hide'
                    whileInView='visible'
                    variants={variants}
                    custom={4}
                >
                    <FaLinkedin />
                </motion.a>
                <motion.a
                    href='https://twitter.com/Lingadurai333'
                    initial='hide'
                    whileInView='visible'
                    variants={variants}
                    custom={5}
                >
                    <FaTwitter />
                </motion.a>
                <motion.a
                    href='https://www.instagram.com/m_r_porukki/'
                    initial='hide'
                    whileInView='visible'
                    variants={variants}
                    custom={6}
                >
                    <FaInstagram />
                </motion.a>
            </div>
        </div>
    );
};

export default Footer;
