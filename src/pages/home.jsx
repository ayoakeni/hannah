import React from "react";
import img from "../assets/images/image1.png";

const HomePage = () => {
  return (
    <section className="home">
      <div className="title-home">
        <h2>HANNAH ADEDIJI MOJIRADE</h2>
        <span></span>
      </div>
      <div className="info">
        <div className="img-text">
          <img src={img} />
        </div>
        <div className="texthero">
          <h2>Welcome to Hannah Mojirade's AI Journey!</h2>
          <p>Explore the fascinating world of Artificial Intelligence with me! This platform is dedicated to showcasing my work, assignments, and progress in mastering AI concepts like machine learning, neural networks, and natural language processing.
          Join me as I delve into the endless possibilities of AI, shaping the future one innovation at a time!</p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
