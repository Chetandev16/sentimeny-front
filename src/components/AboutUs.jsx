import React from "react";
import Typical from "react-typical";
import "./about.css";
import team from "./img/team.png";
const AboutUs = () => {
  return (
    <div id="about" className="about__main">
      <div className="about__img">
        <img src={team} alt="" />
      </div>
      <div className="about__wrapper">
        <div className="about__info">
          <p className="about__p1">
            <b>
              We are 3rd year students of DIT University pursuing BTech CSE.{" "}
            </b>
          </p>
          <p className="about__p2">
            Our project is a analytical project where we analyse polarity of a
            topic in particular platform{" "}
          </p>
          <p className="about__p3">Currently 2 platforms are included </p>
          <p className="about__p3__1"> 1. Twitter </p>
          <p className="about__p3__2"> 2.Google News </p>
        </div>
        <div className="about__member">
          <p className="about__member_p">Team Members-</p>
          <Typical
            className="about__typical"
            loop={Infinity}
            steps={[
              "1. Aditya Thapa",
              1200,
              "2. Chetan Pathak",
              1200,
              "3. Mudit Mamgain",
              1200,
              "4. Aviral Kaushik",
              1200,
            ]}
            wrapper="p"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
{
  /* <Typical
        className="typical"
        loop={Infinity}
        steps={[
          "A Student",
          1200,
          "Enthusiastic Dev ~",
          1200,
          "React Developer!! ",
          1200,
          "Future SDE :)",
          1200,
        ]}
        wrapper="p"
      /> */
}
