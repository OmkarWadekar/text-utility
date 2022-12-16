import React,{useState} from 'react'
//use state is a hook in react -> functionality of class can be used without using class


export default function TextForm(props) {
    
    const handleUpperClick =()=>{
        // console.log("on upper click");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }
    
    const handleOnChange =(e)=>{
        // console.log(" on change" + text);
        setText(e.target.value);
    }
    const handleLowerClick =()=>{
        // console.log("on upper click");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");
    }
    const handleClearScreen =()=>{
        // console.log("on upper click");
        // let newText = " ";
        setText("");
        // props.showAlert("Are you Sure to clear Screen","danger");
    }
    const handleCopy =()=>{
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to ClipBoard!!","success");
    }
    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }


    // const [text,setText] = useState("Enter text here!")
    const [text,setText] = useState("")

    return (
        <>
        <div className="container" style={{color:props.mode=== 'light' ? '#042749' : 'white'}}>
            <h2 >{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control my-4 py-2" value={text} onChange={handleOnChange} 
                style={{backgroundColor:props.mode=== 'dark' ? 'rgb(31 78 100)' : 'white',
                color:props.mode=== 'light' ? 'black' : 'white'}} id="myBox" rows={8}/>
            </div>
            {/* <div className="container"> */}
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpperClick} >Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearScreen}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            {/* </div> */}
        </div>
        <div className="container my-5" style={{color:props.mode=== 'light' ? '#042749' : 'white'}}>
            <h2>Your Text Summary</h2>
            {/* <p>{text}</p> */}
            <p><b>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>

            <p>{0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} Minutes to read</p>
            <hr />
            <h3>Preview</h3>
            <p>{text.length >0 ?text:"Nothing to Preview!!"}</p>
        </div>
        </>

    )
}
