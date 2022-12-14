import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpperCaseClick = () => {
        // console.log("This Upper Case Button was Clicked")
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("UpperCase button clicked");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter Your Text Here")
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpperCaseClick}>UpperCase Text</button>
        </div>
    )
}
