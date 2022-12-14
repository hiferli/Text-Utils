import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
	return (
		<>
			<Navbar title="TextUtils"></Navbar>
			<div className="container my-3">
				<TextForm heading = "Enter the Text:"></TextForm>
			</div>
		</>
	);
}

export default App;
