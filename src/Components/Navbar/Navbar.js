import React from 'react';
import './Navbar.css';

const Navbar = ({ }) => {
   return (
      <nav className="Navbar">
         <div className="Links">
            <a href='#tldr' className="About_Button">
               <span></span>
               <p><b>01.</b><b>TL;DR</b></p>
            </a>
            <a href='#About_Main' className="About_Button">
               <span></span>
               <p><b>02.</b><b>About</b></p>
            </a>
            <a href='#Projects_Main' className="Projects_Button">
               <span></span>
               <p><b>03.</b><b>Projects</b></p>
            </a>
            <a href='#Contacts_Main' className="Contact_Button">
               <span></span>
               <p><b>04.</b><b>Contact</b></p>
            </a>
         </div>
         <button className="Home_Button">
            <div className="Home_Image"></div>
            <div className="Home_Title">Orb<b>-</b>Weaver</div>
         </button>
      </nav>
   );
};

export default Navbar;