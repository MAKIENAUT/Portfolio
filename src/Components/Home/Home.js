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
               <br />
               <p className="Subtitle">
                  I aim to be the best at my chosen craft: Build website, hunt bugs, and
                  provide an exceptional service.
               </p>
            </div>

            <div className="About" id='About_Main'>
               <div className="Heading">
                  <b>02.</b>
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
                     <div className="About_Image"></div>
                  </div>

                  <div className="Technologies">
                     <h3>
                        Here are some of the technologies/languages that I've used:
                     </h3>

                     <div className="Technology_Icons">
                        <div className="Languages">
                           <div className="JS Icon"></div>
                           <b>Javascript</b>
                        </div>
                        <div className="Languages">
                           <div className="HTML Icon"></div>
                           <b>HTML:5</b>
                        </div>
                        <div className="Languages">
                           <div className="CSS Icon"></div>
                           <b>CSS</b>
                        </div>
                        <div className="Languages">
                           <div className="PHP Icon"></div>
                           <b>PHP</b>
                        </div>
                        <div className="Languages">
                           <div className="React Icon"></div>
                           <b>ReactJS</b>
                        </div>
                        <div className="Languages">
                           <div className="Cplus2 Icon"></div>
                           <b>C++</b>
                        </div>
                        <div className="Languages">
                           <div className="WordPress Icon"></div>
                           <b>WordPress</b>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="Projects" id='Projects_Main'>
               <div className="Heading">
                  <b>03.</b>
                  <h1 className='Heading_Title'>Projects</h1>
                  <span></span>
               </div>

               <div className="Project_Body">
                  <div className="Project_Proper">
                     <div className="Project_Heading">
                        <p># 03.<b>a</b></p>
                        <h2>West Migration Agency</h2>
                        <span></span>
                     </div>

                     <div className="Project_Content">
                        <div className="Project_Description">
                           <div className="Description_Heading">
                              <div className="Project_Date">
                                 <b>August 2022 - Present</b>
                              </div>
                              <div className="Project_Role">
                                 Project Manager / Back-End Developer
                              </div>
                              <div className="Project_Languages">
                                 <div className="Language_Chip">JavaScript</div>
                                 <div className="Language_Chip">HTML</div>
                                 <div className="Language_Chip">CSS</div>
                                 <div className="Language_Chip">PHP</div>
                                 <div className="Language_Chip">MySQL</div>
                              </div>
                           </div>
                           <div className="Project_Narrative">
                              A collaborative project with colleagues from school to develop and eventually renovate the website of a US-based migration agency to fit a more modern aesthetic and user experience. If you're interested, contact the website to have a chance to work in the US. ✈️
                           </div>
                           <a href="https://westmigrationagency.com/Pages/Home/home.php">Check 'Em Out! 🔗</a>
                        </div>

                        <div className="Project_Image_1"></div>
                     </div>
                  </div>

                  <div className="Project_Proper">
                     <div className="Project_Heading">
                        <p># 03.<b>b</b></p>
                        <h2>Athena Travel & Tours</h2>
                        <span></span>
                     </div>

                     <div className="Project_Content">
                        <div className="Project_Description">
                           <div className="Description_Heading">
                              <div className="Project_Date">
                                 <b>September 2023 - October 2023</b>
                              </div>
                              <div className="Project_Role">
                                 Project Manager / Back-End Developer
                              </div>
                              <div className="Project_Languages">
                                 <div className="Language_Chip">JavaScript</div>
                                 <div className="Language_Chip">HTML</div>
                                 <div className="Language_Chip">CSS</div>
                                 <div className="Language_Chip">PHP</div>
                                 <div className="Language_Chip">MySQL</div>
                              </div>
                           </div>
                           <div className="Project_Narrative">
                              Another collaborative project with a colleague and best friend was to develop the website of a travel agency located in Calasiao, Pangasinan. With flights abroad or interested in Pangasinan's local scenery, the website helps you pick the best getaway ☀️
                           </div>
                           <a href="https://athenatraveltours.com/Pages/Home/home.php">Check 'Em Out! 🔗</a>
                        </div>

                        <div className="Project_Image_2"></div>
                     </div>
                  </div>

                  <div className="Project_Proper">
                     <div className="Project_Heading">
                        <p># 03.<b>b</b></p>
                        <h2>PHINMA- UPang Voting App</h2>
                        <span></span>
                     </div>

                     <div className="Project_Content">
                        <div className="Project_Description">
                           <div className="Description_Heading">
                              <div className="Project_Date">
                                 <b>September 2023 - October 2023</b>
                              </div>
                              <div className="Project_Role">
                                 Project Manager / Back-End Developer
                              </div>
                              <div className="Project_Languages">
                                 <div className="Language_Chip">JavaScript</div>
                                 <div className="Language_Chip">HTML</div>
                                 <div className="Language_Chip">CSS</div>
                                 <div className="Language_Chip">PHP</div>
                                 <div className="Language_Chip">MySQL</div>
                              </div>
                           </div>
                           <div className="Project_Narrative">
                              Commissioned by the APEC (Appointments, Performance Evaluation, and Electoral Commission), this simple voting web app was utilized for online voting for the SSG and SSC councils of the University. It also included tallying and student directory.
                           </div>
                        </div>

                        <div className="Project_Image_3"></div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="Contact" id='Contact_Main'>
               <div className="Heading">
                  <b>04.</b>
                  <h1 className='Heading_Title'>Contact</h1>
                  <span></span>
               </div>

               <div className="Contact_Body">
                  <div className="Contact_Head">
                     <h1>Get in Touch!</h1>

                     <p>
                        I am always seeking <b>new opportunities</b>! Feel free to reach out to my inbox anytime. Whether you have a query or simply want to <a href='https://m.me/mcray.escoto'>say hello</a>, I'll do my utmost to respond!
                     </p>
                  </div>

                  <div className="Contact_Icons">
                     <a href='' className="Github"><i class="fa-brands fa-github"></i></a>
                     <a href='' className="Linked_In"><i class="fa-brands fa-linkedin-in"></i></a>
                     <a href='' className="Instagram"><i class="fa-brands fa-instagram"></i></a>
                     <a href='' className="Twitter"><i class="fa-brands fa-twitter"></i></a>
                  </div>
               </div>
            </div>

            <div className="Web_Cut_Bottom"></div>
         </div>
      </main>
   );
}

export default HomeMain;