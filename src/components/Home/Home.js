import React from "react";
import "./Home.css";
import myImg from "../../img/lii.png";

import { motion } from "framer-motion";

const Home = () => {
    const names = [
        "Web Developer.",
        "Programer.",
        "Engineer.",
        "Editor.",
        "Freelancer.",
    ];

    let i = 0;
    let j = 0;
    let arr = [];
    let isDeleting = false;
    let isEnding = false;

    const [name, setName] = React.useState("");
    React.useEffect(() => {
        (function type() {
            if (i < names.length) {
                isEnding = false;

                if (!isDeleting && j <= names[i].length) {
                    arr.push(names[i][j]);
                    setName(arr.join(""));
                    j++;
                }

                if (isDeleting && j <= names[i].length) {
                    arr.pop(names[i][j]);
                    setName(arr.join(""));
                    j--;

                    if (j === 0) {
                        arr = [];
                        isDeleting = false;
                        i++;

                        if (i === names.length) {
                            i = 0;
                        }
                    }
                }
                if (j === names[i].length) {
                    isDeleting = true;
                    isEnding = true;
                }

                let speedUp = Math.random() * (80 - 50) + 50;
                let normalSpeed = Math.random() * (270 - 165) + 165;
                let time = isEnding ? 5000 : isDeleting ? speedUp : normalSpeed;
                setTimeout(type, time);
            }
        })();
    }, []);

    const arrow1 = "< body >";
    const arrow2 = "</ body >";

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
                delay: i * 0.3,
                duration: 0.3,
            },
        }),

        hide2: {
            opacity: 0,
            x: "-50px",
        },
      
    };

    return (
        <div className='home' id='home'>
            <div className='left'>
                <motion.div
                    className='imgdiv'
                    initial='hide'
                    whileInView='visible'
                    variants={variants}
                >
                    <img src={myImg} alt='' className='imgdiv' />
                </motion.div>
            </div>
            <div className='right'>
                <div className='r-details'>
                    <motion.span
                        className='arrow-1'
                        initial='hide2'
                        whileInView='visible2'
                        variants={variants}
                        custom={1}
                    >
                        {arrow1}
                    </motion.span>
                    <motion.span
                        className='arrow-2'
                        initial='hide2'
                        whileInView='visible2'
                        variants={variants}
                        custom={2}
                    >
                        {arrow2}
                    </motion.span>
                    <motion.span
                        className='text'
                        initial='hide2'
                        whileInView='visible2'
                        variants={variants}
                        custom={3}
                    >
                        {" "}
                        Hello Everyone,
                    </motion.span>
                    <motion.div
                        className='iam'
                        initial='hide'
                        whileInView='visible'
                        variants={variants}
                        custom={1}
                    >
                        <span className='iam-text'>I am</span>
                        <span className='name'>Lingadurai</span>
                    </motion.div>
                    <motion.div
                        className='dev'
                        initial='hide'
                        whileInView='visible'
                        variants={variants}
                        custom={2}
                    >
                        <span>I'm a</span>
                        <span>{name}</span>
                    </motion.div>
                    <motion.div
                        className='buttons'
                        initial='hide'
                        whileInView='visible'
                        variants={variants}
                        custom={3}
                    >
                        <button>Hire Me</button>
                        <button>About Me</button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Home;
