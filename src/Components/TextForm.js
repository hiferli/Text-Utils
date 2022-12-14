import React, { useState } from 'react'

const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
;

export default function TextForm(props) {
    const handleUpperCaseClick = () => {
        // console.log("This Upper Case Button was Clicked")
        let newText = text.toUpperCase();
        setText(newText);
    }
    
    const handleLowerCaseClick = () => {
        // console.log("This Upper Case Button was Clicked")
        let newText = text.toLowerCase();
        setText(newText);
    }
    
    const handleClearText = () => {
        setText("");
    }

    const handleCapitalCaseClick = () => {
        // console.log("This Upper Case Button was Clicked")
        let newText = capitalize(text);
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("UpperCase button clicked");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter Your Text Here")
    return (
        <>
            <div className='container '>
                <h1>{props.heading}</h1>
                
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <div className="container position-relative">
                    <button className="btn btn-primary mx-1" onClick={handleUpperCaseClick}>UpperCase Text</button>
                    <button className="btn btn-primary mx-1" onClick={handleLowerCaseClick}>LowerCase Text</button>
                    <button className="btn btn-primary mx-1" onClick={handleCapitalCaseClick}>Capitalize Text</button>
                    <button className="btn btn-primary btn-info mx-1 position-absolute top-50 end-0 translate-middle-y" onClick={handleClearText}>Clear</button>
                </div>
            </div>

            <div className="container my-3">
                <h2>Text Analytics:</h2>
                <p>{text.split(" ").length - 1} Words and {text.length} Characters</p>
                <p>Would take roughly {0.08 * (text.split(" ").length - 1)} Minutes to read.</p>
                <h2>Text Preview:</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
