import React from 'react';
import './works.css';
import pf1 from '../../assets/portfolio-1.png'
import pf2 from '../../assets/portfolio-2.png'
import pf3 from '../../assets/portfolio-3.png'
import pf4 from '../../assets/portfolio-4.png'
import pf5 from '../../assets/portfolio-5.png'
import pf6 from '../../assets/portfolio-6.png'


const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">I take my duties very seriously and I'm very passionate about my work. I am excited to bring my skills and experience to help buisness achieve their goals and create a strong online pressence.</span>
        <div className="worksImgs">
            <img src={pf1} alt="pf" className="worksImg" />
            <img src={pf2} alt="pf" className="worksImg" />
            <img src={pf3} alt="pf" className="worksImg" />
            <img src={pf4} alt="pf" className="worksImg" />
            <img src={pf5} alt="pf" className="worksImg" />
            <img src={pf6} alt="pf" className="worksImg" />
        </div>
        <button className="worksBtn">See More</button>
    </section>
  );
}

export default Works
