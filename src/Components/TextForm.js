import React, { useState } from 'react'
import capitalize from 'C:/Users/Dell/Desktop/text-utils/src/index.js';

const numberOfWords = (str) => {
    return (str.split(/\s+/).filter((element) => {return element.length !== 0}).length)
}

export default function TextForm(props) {
    const handleUpperCaseClick = () => {
        // console.log("This Upper Case Button was Clicked")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Upper Case" , "success")
    }
    
    const handleLowerCaseClick = () => {
        // console.log("This Upper Case Button was Clicked")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lower Case" , "success")
    }
    
    const handleClearText = () => {
        setText("");
        props.showAlert("Text Cleared" , "info")
    }
    
    const handleCapitalCaseClick = () => {
        // console.log("This Upper Case Button was Clicked")
        let newText = capitalize(text);
        setText(newText);
        props.showAlert("Text Capitalized" , "success")
    }

    const handleOnChange = (event) => {
        // console.log("UpperCase button clicked");
        setText(event.target.value);
    }

    const [text, setText] = useState("Enter Your Text Here")
    return (
        <>
            <div className='container' style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <h1>{props.heading}</h1>
                
                <div className="mb-3">
                    <textarea className="form-control " style={props.mode === 'light' ? {color: 'black' , backgroundColor: 'white'} : {color: 'white' , backgroundColor: '#333'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <div className="container position-relative">
                    <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpperCaseClick}>UpperCase Text</button>
                    <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLowerCaseClick}>LowerCase Text</button>
                    <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalCaseClick}>Capitalize Text</button>
                    {/* <button className="btn btn-primary btn-info mx-1 position-absolute top-50 end-0 translate-middle-y" >Clear</button> */}
                    <button disabled = {text.length === 0} type="button" className="btn-close position-absolute top-50 end-0 translate-middle-y" data-bs-dismiss="alert" aria-label="Close" onClick={handleClearText}></button>
                </div>
            </div>

            <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <h2>Text Analytics:</h2>
                <p><b>{numberOfWords(text)}</b> Words and <b>{text.length}</b> Characters</p>
                <p>Would take roughly <b>{(0.08 * numberOfWords(text))}</b> Minutes to read.</p>
                <h2>Text Preview:</h2>
                <p><tt>{text.length > 0 ? text : "Your Preview Appears Here"}</tt></p>
            </div>
        </>
    )
}
