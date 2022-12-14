import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react'


function App() {
	const [theme, setTheme] = useState('light');
	const toggleTheme = () => {
		if(theme === 'dark'){
			setTheme('light');
			document.body.style.backgroundColor = 'white';
		} else {
			setTheme('dark');
			document.body.style.backgroundColor = '#333';
		}

	}

	return (
		<>
			<Navbar title="TextUtils" mode = {theme} toggleTheme = {toggleTheme}></Navbar>
			<div className="container my-3">
				<TextForm heading = "Enter the Text:" mode = {theme}></TextForm>
				{/* <About></About> */}
			</div>
		</>
	);
}

export default App;
