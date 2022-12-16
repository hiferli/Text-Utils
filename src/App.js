import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alerts from './Components/Alerts';
import React, { useState } from 'react'


function App() {
	const [theme, setTheme] = useState('light');
	const [alert, setAlert] = useState(null);

	const displayAlert = (message , type) => {
		setAlert({
			message: message ,
			type: type
		})
		setTimeout(() => {
			setAlert(null);
		}, 1500);
	}

	const toggleTheme = () => {
		if(theme === 'dark'){
			setTheme('light');
			document.body.style.backgroundColor = 'white';
			displayAlert("Dark Mode Enabled" , "success");
		} else {
			setTheme('dark');
			document.body.style.backgroundColor = '#333';
			displayAlert("Light Mode Enabled" , "success");
		}

	}

	return (
		<>
			<Navbar title="TextUtils" mode = {theme} toggleTheme = {toggleTheme}></Navbar>
			<Alerts alert = {alert}></Alerts>
			<div className="container my-3">
				<TextForm showAlert = {displayAlert} heading = "Enter the Text:" mode = {theme}></TextForm>
				{/* <About></About> */}
			</div>
		</>
	);
}

export default App;
