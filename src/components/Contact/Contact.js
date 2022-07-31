import React from "react";
import "./Contact.css";
import { FaWhatsapp, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
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
            y: "50px",
        },

        hide2: {
            opacity: 0,
            x: "-50px",
        },
    };

    // Form

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    const [nameempty, setnameEmpty] = React.useState(false);
    const [emailempty, setemailEmpty] = React.useState(false);
    const [messageempty, setmessageEmpty] = React.useState(false);

    const nameHandler = (e) => {
        setName(e.target.value);

        if (e.target.value === "") {
            setnameEmpty(true);
        } else {
            setnameEmpty(false);
        }
    };
    const emailHandler = (e) => {
        setEmail(e.target.value);
        if (e.target.value === "") {
            setemailEmpty(true);
        } else {
            setemailEmpty(false);
        }
    };
    const messageHandler = (e) => {
        setMessage(e.target.value);
        if (e.target.value === "") {
            setmessageEmpty(true);
        } else {
            setmessageEmpty(false);
        }
    };

    const form = React.useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_xd03ism",
                "template_75cdc2o",
                form.current,
                "8e2zkhPZsMG1V63tc"
            )
            .then(
                (result) => {
                    alert("Your response sent successfully");
                    setName("");
                    setEmail("");
                    setMessage("");
                },
                (error) => {
                    alert("Opps something went wrong");
                    setName("");
                    setEmail("");
                    setMessage("");
                }
            );
    };

    // Button Disable

    const [buttonShow, setButtonShow] = React.useState(true);

    React.useEffect(() => {
        if (name !== "" && email !== "" && message !== "") {
            setButtonShow(false);
        } else {
            setButtonShow(true);
        }
    }, [name, email, message]);

    return (
        <div className='contact' id='contact'>
            <motion.h2
                className='heading oAnimation'
                initial='hide2'
                whileInView='visible'
                variants={variants}
                custom={1}
            >
                Contact Me
            </motion.h2>

            <div className='contact_container'>
                <div className='contact_left'>
                    <div className='socialMedia'>
                        <motion.div
                            className='whatsapp div'
                            initial='hide'
                            whileInView='visible'
                            variants={variants}
                            custom={1}
                        >
                            <a href='https://api.whatsapp.com/send?phone=919080422082&text=Hi'>
                                <FaWhatsapp />
                                <h2>Whatsapp</h2>
                            </a>
                        </motion.div>
                        <motion.div
                            className='linkedin div'
                            initial='hide'
                            whileInView='visible'
                            variants={variants}
                            custom={2}
                        >
                            <a href='https://www.linkedin.com/in/lingadurai-p-971b53218/'>
                                <FaLinkedin />
                                <h2>LinkedIn</h2>
                            </a>
                        </motion.div>
                    </div>
                    <div className='socialMedia'>
                        <motion.div
                            className='Twiter div'
                            initial='hide'
                            whileInView='visible'
                            variants={variants}
                            custom={3}
                        >
                            <a href='https://twitter.com/Lingadurai333'>
                                <FaTwitter />
                                <h2>Twitter</h2>
                            </a>
                        </motion.div>
                        <motion.div
                            className='insta div'
                            initial='hide'
                            whileInView='visible'
                            variants={variants}
                            custom={4}
                        >
                            <a href='https://www.instagram.com/m_r_porukki/'>
                                <FaInstagram />
                                <h2>Instagram</h2>
                            </a>
                        </motion.div>
                    </div>
                </div>
                <div className='contact_right'>
                    <form action='' className='form' ref={form}>
                        <div className='content'>
                            <motion.label
                                style={{
                                    color: `${
                                        nameempty ? "red" : "var(--f-color)"
                                    }`,
                                }}
                                htmlFor='name'
                                initial='hide2'
                                whileInView='visible'
                                variants={variants}
                                custom={3}
                            >
                                Full Name
                            </motion.label>
                            <motion.input
                                type='text'
                                style={{
                                    borderBottom: `2px solid ${
                                        nameempty ? "red" : "var(--h-color)"
                                    }`,
                                }}
                                name='userName'
                                id='name'
                                initial='hide'
                                whileInView='visible'
                                variants={variants}
                                custom={4}
                                onChange={nameHandler}
                                value={name}
                            />
                        </div>
                        <div className='content'>
                            <motion.label
                                style={{
                                    color: `${
                                        emailempty ? "red" : "var(--f-color)"
                                    }`,
                                }}
                                htmlFor='emali'
                                initial='hide2'
                                whileInView='visible'
                                variants={variants}
                                custom={4}
                            >
                                Email
                            </motion.label>
                            <motion.input
                                type='email'
                                style={{
                                    borderBottom: `2px solid ${
                                        emailempty ? "red" : "var(--h-color)"
                                    }`,
                                }}
                                name='userEmail'
                                id='email'
                                initial='hide'
                                whileInView='visible'
                                variants={variants}
                                custom={5}
                                onChange={emailHandler}
                                value={email}
                            />
                        </div>
                        <div className='content'>
                            <motion.label
                                style={{
                                    color: `${
                                        messageempty ? "red" : "var(--f-color)"
                                    }`,
                                }}
                                htmlFor='message'
                                initial='hide2'
                                whileInView='visible'
                                variants={variants}
                                custom={5}
                            >
                                Message
                            </motion.label>
                            <motion.input
                                type='text'
                                style={{
                                    borderBottom: `2px solid ${
                                        messageempty ? "red" : "var(--h-color)"
                                    }`,
                                }}
                                name='message'
                                id='message'
                                initial='hide'
                                whileInView='visible'
                                variants={variants}
                                custom={6}
                                onChange={messageHandler}
                                value={message}
                            />
                        </div>

                        {buttonShow ? (
                            <button
                                disabled={true}
                                className='button btn nrmlBtn'
                            >
                                Submit
                            </button>
                        ) : (
                            <motion.button
                                className='button btn'
                                onClick={submitHandler}
                                initial='hide2'
                                whileInView='visible'
                                variants={variants}
                                custom={7}
                            >
                                <a href='#'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    send
                                </a>
                            </motion.button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
