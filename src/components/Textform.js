import React, { useState } from 'react'


export default function Textform(props) {
const handleUpClick= () => {
  let newText = text.toUpperCase();
  setText(newText);
}

const handleOnChange = (event)=> {
  setText(event.target.value);
}

const handleLowerClick = ()=> {
  let newText = text.toLowerCase();
  setText(newText);
}

const handleCapClick = ()=> {
  var pieces = text.split(" ");
    for ( var i = 0; i < pieces.length; i++ )
    {
        var j = pieces[i].charAt(0).toUpperCase();
        pieces[i] = j + pieces[i].substr(1);
    }    
  setText(pieces.join(" "));
}

const handleCopy = ()=> {
  var text = document.getElementById("mybox");
  text.select();
  navigator.clipboard.writeText(text.value);
}

const handleAltCapClick = ()=> {
  let newText = text.toUpperCase();
  setText(newText);
  var pieces = newText.split(" ");
    for ( var i = 0; i < pieces.length; i++ )
    {
        var j = pieces[i].charAt(0).toLowerCase();
        pieces[i] = j + pieces[i].substr(1);
    }    
  setText(pieces.join(" "));
}

// const speak = () => {
//   let msg = new SpeechSynthesisUtterance();
//   msg.text = text;
//   window.speechSynthesis.speak(msg);
// }

const speak = () => {
      let msg = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(msg);
      const toogle = document.getElementById('toggle')
      if (toogle.textContent == "Speak") {
          toogle.innerHTML = "Stop"
      }
      else {
          toogle.innerHTML = "Speak"
          if (toogle.innerHTML = "Speak"){
              window.speechSynthesis.cancel()
          }
      }
  }

  const handleResetClick = (event)=> {
    let newText = ("");
    setText(newText);
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
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
            <button className="btn btn-primary" onClick={handleCapClick}>Capatilize</button>
            <button className="btn btn-primary mx-2" onClick={handleAltCapClick}>Alt Capatilize</button>
            <button className="btn btn-primary" onClick={speak} id="toggle">Speak</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleResetClick}>Reset</button>
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
