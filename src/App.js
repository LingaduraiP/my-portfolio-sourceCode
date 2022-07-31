import React from "react";
import "./App.css";
import About from "./components/About me/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Project from "./components/Projects/Project";
import Skils from "./components/Skills/Skils";
import Theme from "./components/ThemeChanger/Theme";

const App = () => {

    return (
        <div className='app'>
            <Theme />
            <Header />
            <div className='components'>
                <Home />
                <About />
                <Education />
                <Skils />
                <Project />
                <Contact />
                <Footer />
            </div>
        </div>
    );
};

export default App;
