import React from "react";
import "./Skils.css";
import { motion } from "framer-motion";

const Skils = () => {
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

    return (
        <div className='skills_container' id='skills'> 
            <motion.h2
                className='heading'
                initial='hide2'
                custom={1}
                whileInView='visible'
                variants={variants}
            >
                My Skills
            </motion.h2>
            <div className='skills'>
                <div className='skill'>
                    <motion.h2
                        initial='hide2'
                        custom={1}
                        whileInView='visible'
                        variants={variants}
                    >
                        HTML
                    </motion.h2>
                    <motion.div
                        className='progress_bar'
                        initial='hide1'
                        custom={1}
                        whileInView='visible'
                        variants={variants}
                    >
                        <div className='bar HTML'>
                            <span className='html'>90%</span>
                        </div>
                    </motion.div>
                </div>

                <div className='skill'>
                    <motion.h2
                        initial='hide2'
                        custom={2}
                        whileInView='visible'
                        variants={variants}
                    >
                        CSS
                    </motion.h2>
                    <motion.div
                        className='progress_bar'
                        initial='hide1'
                        custom={2}
                        whileInView='visible'
                        variants={variants}
                    >
                        <div className='bar CSS'>
                            <span className='css'>85%</span>
                        </div>
                    </motion.div>
                </div>
                <div className='skill'>
                    <motion.h2
                        initial='hide2'
                        custom={3}
                        whileInView='visible'
                        variants={variants}
                    >
                        Sass
                    </motion.h2>
                    <motion.div
                        className='progress_bar'
                        initial='hide1'
                        custom={3}
                        whileInView='visible'
                        variants={variants}
                    >
                        <div className='bar Sass'>
                            <span className='sass'>75%</span>
                        </div>
                    </motion.div>
                </div>

                <div className='skill'>
                    <motion.h2
                        initial='hide2'
                        custom={4}
                        whileInView='visible'
                        variants={variants}
                    >
                        JavaScript
                    </motion.h2>
                    <motion.div
                        className='progress_bar'
                        initial='hide1'
                        custom={4}
                        whileInView='visible'
                        variants={variants}
                    >
                        <div className='bar JavaScript'>
                            <span className='js'>75%</span>
                        </div>
                    </motion.div>
                </div>

                <div className='skill'>
                    <motion.h2
                        initial='hide2'
                        custom={5}
                        whileInView='visible'
                        variants={variants}
                    >
                        Reactjs
                    </motion.h2>
                    <motion.div
                        className='progress_bar'
                        initial='hide1'
                        custom={5}
                        whileInView='visible'
                        variants={variants}
                    >
                        <div className='bar Reactjs'>
                            <span className='react'>70%</span>
                        </div>
                    </motion.div>
                </div>

                <div className='skill'>
                    <motion.h2
                        initial='hide2'
                        custom={6}
                        whileInView='visible'
                        variants={variants}
                    >
                        PostgreSQL
                    </motion.h2>
                    <motion.div
                        className='progress_bar'
                        initial='hide1'
                        custom={6}
                        whileInView='visible'
                        variants={variants}
                    >
                        <div className='bar PostgreSQL'>
                            <span className='sql'>50%</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Skils;
