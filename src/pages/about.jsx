import React from "react";
import img from "../assets/images/image1.png"

const About = () => {

  return (
    <div className="about">
      <div className="title-home">
        <h2>ABOUT ME</h2>
        <span></span>
      </div>
      <div className="details">
        <p className="text-in">
          Hello! My name is <strong>Hannah Mojirade Adediji</strong>, and my matriculation number is <strong>F/HD/23/3210048</strong>. I am currently a student at Yaba College of Technology, pursuing my studies with dedication and passion.
          I am also a creative and innovative <strong>Graphic Designer</strong> with a flair for transforming ideas into visually stunning designs. My expertise lies in crafting compelling visuals, branding, and design solutions that communicate effectively and leave a lasting impression.
          I am committed to excellence in both academics and my creative pursuits, striving to make an impact in the world of design and beyond.
        </p>
        <h2>A SHORT RECAP</h2>
        <div className="text-name">
          <li>Name: <strong>Hannah Mojirade Adediji</strong></li>
          <li>Matriculation Number: <strong>F/HD/23/3210048</strong></li>
          <li>School: <strong>School of Technology</strong></li>
          <li>Department: <strong> Computer Science</strong></li>
          <li>Skills: <strong>Graphic Designer</strong></li>
        </div>
      </div>
    </div>
  );
};

export default About;
