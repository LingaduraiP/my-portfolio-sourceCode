import React from "react";
import "./Header.css";
import logo from "../../img/logo2.png";
import { FiMenu } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Header = () => {
    const [showmenu, setShowmenu] = React.useState(false);
    const [click, setClick] = React.useState(false);
    const [show, setShow] = React.useState(false);

    const [navBar, setNavBar] = React.useState(false);
    // ----------  menu Function ----------

    const menuFn = () => {
        if (window.innerWidth < 900) {
            setShowmenu(true);
            setClick(false);
            setShow(false);
        } else {
            setShowmenu(false);
            setClick(true);
            setShow(true);
        }
    };

    // ----------  Use Effect    ----------
    React.useEffect(() => {
        menuFn();
    }, []);
    React.useEffect(() => {
        window.addEventListener("resize", () => menuFn());

        window.removeEventListener("resize", () => menuFn());
    }, [window.innerWidth]);

    //   ----------    MenuHandler    ----------
    const menuHandler = () => {
        setClick((prev) => !prev);
        setShow((prev) => !prev);
    };

    // fixed navigation function

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            const about = document.querySelector(".about");
            if (window.scrollY + 250 > about.offsetTop) {
                setNavBar(true);
            } else {
                setNavBar(false);
            }
        });
    });

    // menu Active handler
    const activeMenu = () => {
        const education = document.querySelector(".education");
        const project = document.querySelector(".project");
        const contact = document.querySelector(".contact");
        const home = document.querySelector(".home");
        const about = document.querySelector(".about");
        const li = document.querySelectorAll(".li");
        const menuArr = [home, about, education, project, contact];

        const liArr = Array.from(li);
        for (var i = 0; i < liArr.length; i++) {
            if (
                menuArr[i].getBoundingClientRect().top <= window.innerHeight &&
                menuArr[i].getBoundingClientRect().top > 0
            ) {
                li[i].classList.add("active");
            } else {
                li[i].classList.remove("active");
            }
        }
    };

    React.useEffect(() => {
        window.addEventListener("scroll", activeMenu);

        return () => window.removeEventListener("scroll", activeMenu);
    }, []);

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

    // menuLinkHandler

    const menuLinkHandler=()=>{
        if(showmenu)
        {
            menuHandler()
        }
    }

    return (
        <div className={`header ${navBar === true ? "sticky" : ""} `}>
            <div className='logo'>
                <motion.img
                    src={logo}
                    alt=''
                    id='logo'
                    initial='hide'
                    whileInView='visible'
                    variants={variants}
                    custom={1}
                />
            </div>

            <nav className='nav'>
                {showmenu && (
                    <motion.div
                        className='menu'
                        onClick={menuHandler}
                        initial='hide'
                        whileInView='visible'
                        variants={variants}
                        custom={1}
                    >
                        {click === true ? <RiCloseLine /> : <FiMenu />}
                    </motion.div>
                )}
                {show && click && (
                    <ul className='ulanimation'>
                        <motion.li
                            className={`li ${!showmenu ? "active" : ""}`}
                            initial='hide2'
                            whileInView='visible'
                            variants={variants}
                            custom={2}
                        >
                            <Link
                                to='home'
                                smooth={true}
                                s
                                offset={-200}
                                onClick={menuLinkHandler}
                            >
                                Home
                            </Link>
                        </motion.li>

                        <motion.li
                            className='li'
                            initial='hide2'
                            whileInView='visible'
                            variants={variants}
                            custom={3}
                        >
                            <Link
                                to='about'
                                offset={-200}
                                smooth={true}
                                spy={true}
                                onClick={menuLinkHandler}
                            >
                                About
                            </Link>
                        </motion.li>
                        <motion.li
                            className='li'
                            initial='hide2'
                            whileInView='visible'
                            variants={variants}
                            custom={4}
                        >
                            <Link
                                to='education'
                                smooth={true}
                                spy={true}
                                offset={-200}
                                onClick={menuLinkHandler}
                            >
                                Education
                            </Link>
                        </motion.li>
                        <motion.li
                            className='li'
                            initial='hide2'
                            whileInView='visible'
                            variants={variants}
                            custom={5}
                        >
                            <Link
                                to='project'
                                smooth={true}
                                spy={true}
                                offset={-200}
                                onClick={menuLinkHandler}
                            >
                                Projects
                            </Link>
                        </motion.li>
                        <motion.li
                            className='li'
                            initial='hide2'
                            whileInView='visible'
                            variants={variants}
                            custom={6}
                        >
                            <Link
                                to='contact'
                                smooth={true}
                                spy={true}
                                offset={-200}
                                onClick={menuLinkHandler}
                            >
                                Contact
                            </Link>
                        </motion.li>
                    </ul>
                )}
            </nav>
        </div>
    );
};

export default Header;
