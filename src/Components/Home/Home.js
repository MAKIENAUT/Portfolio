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
            hello
         </div>
      </main>
   );
}

export default HomeMain;