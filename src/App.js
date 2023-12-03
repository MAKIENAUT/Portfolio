import React, { useState } from 'react';
import './App.css';
import './Components/Home/Home.css';
import './Components/Navbar/Navbar.css';
import HomeMain from './Components/Home/Home.js';
import Navbar from './Components/Navbar/Navbar.js';
import Projects from './Components/Projects/Projects.js';

const App = () => {
	return (
		<div className="App">
			<HomeMain />
		</div>
	);
};

export default App;