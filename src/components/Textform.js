import React, { useState } from 'react'


export default function Textform(props) {
const handleUpClick= () => {
  let newText = text.toUpperCase();
  setText(newText);
}

const handleOnChange = (event)=> {
  console.log('On change');
  setText(event.target.value);
}

const handleLowerClick = (event)=> {
  let newText = text.toLowerCase();
  setText(newText);
}

  const [text, setText] = useState('Enter text here');
  return (
    <div>
        <div className="container my-4">
            <h1>{props.heading}</h1>
            <div class="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="5"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to LowerCase</button>
        </div>
        <div className="container">
          <h1>Your text summary</h1>
          <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> Characters</p>
          <p>{0.008 * text.split(" ").length} Minutes read.</p>
          <p></p>
          <h3>Preview</h3>
          <p>{text}</p>
        </div>
    </div>
  )
}
