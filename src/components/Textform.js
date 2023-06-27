import React, { useState } from 'react';


function Textform(props) {
  const handleUpClick= () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleOnChange = (event)=> {
    setText(event.target.value);
  }

  const handleLowerClick = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  }

  const handleCapClick = ()=> {
    var pieces = text.split(" ");
      for ( var i = 0; i < pieces.length; i++ )
      {
          var j = pieces[i].charAt(0).toUpperCase();
          pieces[i] = j + pieces[i].substr(1);
      }    
    setText(pieces.join(" "));
    props.showAlert("Converted to Capatilize!", "success");
  }

  const handleCopy = ()=> {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Coppied to clipbord!", "success");
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
    props.showAlert("Converted to alternative capatilize!", "success");
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
      if (toogle.textContent === "Speak") {
          toogle.innerHTML = "Stop"
      }
      else {
          toogle.innerHTML = "Speak"
          if (toogle.innerHTML === "Speak"){
              window.speechSynthesis.cancel()
          }
      }
      props.showAlert("Speak move is on!", "success");
  }

  const handleResetClick = (event)=> {
    let newText = ("");
    setText(newText);
    props.showAlert("Textbox is rest!", "success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space in removed!", "success");
  }
  function countWords(str) {
    var matches = str.match(/[\w\d\’\'-]+/gi);
    return matches ? matches.length : 0;
  }

  const [text, setText] = useState('Enter text here');
  return (
    <div style={{backgroundColor: props.mode==='dark'?'#042743':'#fff', color: props.mode==='dark'?'#fff':'#042743'}}>
        <div className="container py-4">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'#fff',color:props.mode==='dark'?'#fff':'#042743'}} id="mybox" rows="5"></textarea>
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
        <div className="container  py-4">
          <h1>Your text summary</h1>
          {/* <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> Characters</p> */}
          <p><b>{countWords(text)}</b> words and <b>{text.length}</b> Characters</p>
          <p>{0.008 * text.split(" ").length} Minutes read.</p>
          <h3>Preview</h3>
          <p>{text.length >0 ? text : 'Enter something in the textarea above to preview it here'}</p>
        </div>
    </div>
  )
}

export default Textform;
