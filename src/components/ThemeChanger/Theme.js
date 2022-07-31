import React from "react";
import { FaTools, FaMoon } from "react-icons/fa";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Theme.css";

const Theme = () => {
    const [showIcon, setShowIcon] = React.useState(false);
    const [value, setValue] = React.useState(232);
    const [radio, setRadio] = React.useState(false);

    const logo = document.getElementById("logo");
    const html = document.querySelector("html");

    // icon Handler
    const iconHandler = () => {
        setShowIcon((prev) => !prev);
    };

    // Range Hander
    const rangeHandler = (e) => {
        setValue(e.target.value);
        html.style.setProperty("--color", e.target.value);

        logo.style.filter = `hue-rotate(${value}deg)`;
    };

    // Radio Handler
    const radioHandler = () => {
        setRadio((prev) => !prev);
    };
    // DarkMode
    if (radio === true) {
        html.style.setProperty("--font-white", "100%");
        html.style.setProperty("--back-black", "0%");
    }
    if (radio === false) {
        html.style.setProperty("--font-white", "20%");
        html.style.setProperty("--back-black", "85%");
    }

    return (
        <div className='theme'>
            <button
                className={`setIcon ${
                    showIcon === true ? "rotate" : "rrotate"
                } `}
                onClick={iconHandler}
            >
                <FaTools />
            </button>

            <div
                className={`showIcons ${showIcon === true ? "show " : "hide"}`}
            >
                <div className='drager'>
                    <input
                        type='range'
                        name=''
                        id=''
                        min='0'
                        max='360'
                        onChange={rangeHandler}
                        value={value}
                    />
                </div>
                <div className='radio-container' onClick={radioHandler}>
                    <input type='radio' name='' id='' className='radio' />
                    <span className={`day ${radio === true ? "on" : "off"}`}>
                        {radio === true ? (
                            <FontAwesomeIcon icon={faSun} />
                        ) : (
                            <FaMoon />
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Theme;
