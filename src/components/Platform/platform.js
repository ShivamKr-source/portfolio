import React from 'react';
import './platform.css';
import githubIcon from '../../assets/github.png';
import leetcodeIcon from '../../assets/leetcode.png';
import conceptsIcon from '../../assets/concepts.png';


const Platform = () => {
  return (
    <section id="platforms">
        <h1 className="platformTitle">My working Platforms</h1>
        <span className="platformDesc">These are the platforms where i work on my projects , build my skills and brush my talents.</span>
        <div className="platformImgs">
            <a href="https://leetcode.com/Shivam_Cop/" target="_blank" rel="noreferrer"><img src={leetcodeIcon} alt="LeetCode" className="platImg" /></a>
            <a href="https://github.com/ShivamKr-source" target="_blank" rel="noreferrer"><img src={githubIcon} alt="Git-Hub" className="platImg" /></a>
            <a href="https://concepts.app/en/" target="_blank" rel="noreferrer"><img src={conceptsIcon} alt="Concepts" className="platImg" /></a>
        </div>
    </section>
  );
}

export default Platform
