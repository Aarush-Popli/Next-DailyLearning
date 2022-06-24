import React from "react";
import Footer from "../components/Footer";
import a from '../styles/About.module.css'
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <>
      <div className={a.container}>
        <h1 className={a.heading}>Daily Learning</h1>
        <p className={a.text}>In this blog I post about my daily learnings.</p>
      </div>
      <Marquee gradient={false} speed={50}>
        <span className={a.badge}>Web Development</span>
        <span className={a.badge}>Animation</span>
        <span className={a.badge}>Chess</span>
        <span className={a.badge}>Cryptocurrency</span>
        <span className={a.badge}>Blender</span>
        <span className={a.badge}>Finance</span>
        <span className={a.badge}>Bootstrap</span>
        <span className={a.badge}>Front end</span>
        <span className={a.badge}>Insurance</span>
        <span className={a.badge}>Angular</span>
        <span className={a.badge}>Science</span>
        <span className={a.badge}>React JS</span>
      </Marquee>
      <Footer />
    </>
  );
};

export default About;
