import React ,{useState} from "react";
import PropTypes from 'prop-types'

export default function TextBox(props) {
    const [text,setText] = useState('');
    //const [wrd,setWrd] = useState(0);
    //const [chr,setChr] = useState(0);
    
    const handleonchange = (event) =>{
        console.log("text change")
        setText(event.target.value)
        //setWrd(text.split(" ").length)
        //setChr(text.length)
        console.log(event.target.value.split(" ").length , event.target.value.length , event.target.value)
        console.log(text.split(" ").length , text.length , text)
        //console.log(wrd , chr , text)
    }

    const handleonclickUppert= ()=>{
        console.log("clicked")
        let newtext = text.toUpperCase();
        console.log(newtext);
        setText(newtext);
        if(text.length===0)
            props.showAlert("No text",'danger');
        else
        props.showAlert("text Converted",'success');
    }
    const handleonclickLower= ()=>{

        console.log("clicked")
        let newtext = text.toLowerCase();
        console.log(newtext);
        setText(newtext);
        if(text.length===0)
            props.showAlert("No text",'warning');
        else
        props.showAlert("text Converted",'success');
    }
    const copyToClipboard = str => {

        str = text;
        if(str.length===0)
            props.showAlert("No text",'warning');
        else
        props.showAlert("text Converted",'primary');
        if (navigator && navigator.clipboard && navigator.clipboard.writeText)
          return navigator.clipboard.writeText(str);
        return Promise.reject('The Clipboard API is not available.');
        
      };

  return (
    <>
    <div className="container">
      <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
      <div className="mb-5">
        
        <textarea
          className="form-control"
          value = {text}
          onChange={handleonchange}
          id="exampleFormControlTextarea1"
          rows="9"
          style={{color: props.mode==='dark'?'white':'black', backgroundColor:props.mode==='dark'?'#495057':'white'}}

        ></textarea>
      </div>
        <button className="btn btn-primary mx-1" onClick={handleonclickUppert}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleonclickLower}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={copyToClipboard}>Copy to Clipboard</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>Analysis of text</h3>
        <p>your text contain {text.length===0?text.length:text.split(" ").length} words and {text.length} characters. </p>
    </div>
    </>
  );
}

TextBox.propTypes = {heading : PropTypes.string.isRequired}