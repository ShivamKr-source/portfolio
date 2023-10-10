import React, { useRef } from 'react';
import './contact.css';
import instaIcon from '../../assets/instagram.png';
import ytIcon from '../../assets/youtube.png';
import linkedInIcon from '../../assets/LinkedIn.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ok37she', 'template_mr6ymtu', form.current, 'KMHLF9ZXxXmyBaTr_')
        .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !');
        }, (error) => {
              console.log(error.text);
        });
    };

    return (
      <section id="contactPage">
        <div className="contact">
          <h1 className="contactTitle">Contact Me</h1>
          <span className="contactDesc">Please fill out the form below to discuss any work oppurtunities.</span>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='your_name'/>
            <input type="email" className="email" placeholder='Your E-mail' name='your_email'/>
            <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className="submitBTn">Submit</button>
            <div className="links">
              <a href='https://instagram.com/shivam_v_21?igshid=OGQ5ZDc2ODk2ZA==' target='_blank' rel="noreferrer"><img src={instaIcon} alt="InstaGram" className="link" /></a>
              <a href='https://www.linkedin.com/in/shivam-kumar-a19981257/' target='_blank' rel="noreferrer"><img src={linkedInIcon} alt="LinkedIn" className="link" /></a>
              <a href='https://www.youtube.com/channel/UC3GAz0YRcucenBi_CPQ_69Q' target='_blank' rel="noreferrer"><img src={ytIcon} alt="YouTube" className="link" /></a>
            </div>
          </form>
        </div>
          
      </section>
  );
}

export default Contact;
