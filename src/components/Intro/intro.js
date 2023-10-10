import React from 'react';
import './intro.css';
import img from '../../assets/image1.png';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Shivam</span><br />Passionate Coder</span>
            <p className="introPara">I'm a skilled web developer with experience in creating <br/>visually appealing and user friendly websites and<br/>have various skills in art field along with the knowledge of<br/>machine learning models</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire me" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={img} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro;
