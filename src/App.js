import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Alerts from './Components/Alerts';
import React, { useState } from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom';


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
		<BrowserRouter>
			<Navbar title="TextUtils" mode = {theme} toggleTheme = {toggleTheme}></Navbar>
			<Alerts alert = {alert}></Alerts>
			<div className="container my-3">
		<Routes>
				<Route exact path='/' element={
					<TextForm showAlert = {displayAlert} heading = "Enter the Text:" mode = {theme}></TextForm>
				}/>
				<Route exact path='/about' element={
					<About></About>
				} />
		</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
