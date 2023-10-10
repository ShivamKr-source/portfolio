import React from 'react'
import './skills.css';
import webDesign from '../../assets/website-design.png'
import artImg from '../../assets/palette.png'
import machineLearning from '../../assets/ml.png'

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillsTitle">What I Do</span>
        <span className="skillsDesc">I am a skilled and passionate web designer. I have a strong understanding and a keen eye for detail. I am profiecient in HTML , CSS , JavaScript. I'm also an aesthete and i'm very much into aesthetics.</span>
        <div className="skillsBars">
          <div className="skillBar">
            <img src={webDesign} alt="webDesign" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Web Design</h2>
              <p>I have knowledge about HTML , CSS , JavaScript , React , Node </p>
            </div>
          </div>
          <div className="skillBar">
            <img src={artImg} alt="art" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Art/Painting Design</h2>
              <p>I excel in different art methods i.e. sketching , painting , water coloring and many more.</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={machineLearning} alt="Machine Learning" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Machine Learning</h2>
              <p>I have studied about different machine learning models and different methods to implement</p>
            </div>
          </div>   
        </div>
    </section>
  );
}

export default Skills;
