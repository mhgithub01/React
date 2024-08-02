import { useState } from "react"
import "./text.css"






export default function TextForm(props){
    const [text , setText] = useState("Enter the text")


    const handleUpClick = () => {
        console.log('Upper Was clicked');
        let newText = text.toUpperCase()
        setText(newText)
         }

         const handleOnChange = (e) => {
            console.log('Onchange');
            setText(event.target.value)
             }
    return(
     <>
        <h1 className="heading">{props.heading}</h1>
     <div >
     <textarea className="focus-textarea" rows={15} value={text} onChange={handleOnChange} ></textarea>
     </div>
     <button onClick={handleUpClick} className="btn">Convert to UpperCase</button>
     </>
    )
}