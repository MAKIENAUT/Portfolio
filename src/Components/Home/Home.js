import { useState } from 'react';
import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';

const HomeMain = () => {


   const web = {
      web_mid: 'WEB',
      web_left: '<',
      web_right: '>'
   };
   return (
      <main className="HomeMain">
         <div className="Main_Left">
            <div className="Hero_Title">
               <h3 className='Hero_Sub'>Welcome to my</h3>
               <div className="Attention">
                  <h1 className='Attention_Left'>{web.web_left}</h1>
                  <h1 className='Attention_Main'>{web.web_mid}</h1>
                  <h1 className='Attention_Right'>{web.web_right}</h1>
               </div>
            </div>

            <Navbar />
         </div>



         <div className="Main_Right">
            <div className="Web_Cut_Top"></div>

            <div id='tldr' className="Content_Article">
               <p className='Intro'>Yo! I am</p>
               <h1 className='Name'>Mc Ray Escoto</h1>
               <p className='Subtitle'>
                  I am a Full-Stack Web Developer with an acute fascinations to spiders 🕸️.
               </p>
               <p className="Subtitle">
                  Currently a graduating Web Dev Student determined to be one of the best.
               </p>
               <p className="Subtitle">
                  I aim to be the best at my chosen craft: Build website, hunt bugs, and
                  provide an exceptional service.
               </p>
            </div>

            <div className="About" id='About_Main'>
               <div className="Heading">
                  <b>01.</b>
                  <h1 className='Heading_Title'>About Me</h1>
                  <span></span>
               </div>

               <div className="About_Description">
                  <p>
                     Tech and the Internet has always fascinated me. I had a voluntary mentorship during the pandemic when I was confused of what to take for college, the first language I learned to was JavaScript. Learning the language was "Brain Rewire" moment for me. And ever since then I have fell in love in Programming.
                  </p>

                  <div className="About_Picture">
                     <p>
                        Back to the present, I am now a graduating student of the <a href="https://up.phinma.edu.ph/">PHINMA - University of Pangasinan</a> pursuing for internship.
                        <br />
                        <br />
                        I also lead my team for our Capstone Project as Project Manager. The management skill has then landed me some small-scale projects. Aspiring to be a Tech Entrepreneur, I built a small start-up for growing developers like me called "Orb-Weaver."
                     </p>
                     
                     <div className="Image_Frame"></div>
                     <div className="Image_Frame2"></div>

                     <div className="About_Image">
                     </div>
                  </div>
               </div>
            </div>

            <div className="Projects" id='Projects_Main'>
               <div className="Heading">
                  <b>02.</b>
                  <h1 className='Heading_Title'>Projects</h1>
                  <span></span>
               </div>
            </div>

            <div className="Experience" id='Experience_Main'>
               <div className="Heading">
                  <b>03.</b>
                  <h1 className='Heading_Title'>Experience</h1>
                  <span></span>
               </div>
            </div>

            <div className="Web_Cut_Bottom"></div>
         </div>
      </main>
   );
}

export default HomeMain;