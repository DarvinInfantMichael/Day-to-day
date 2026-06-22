import { useState } from "react"
import withUpperCase from "../../hoc/withUpperCase";
import MessageCom from "../../Day9/MessageCom";

const UpperComponent=withUpperCase(MessageCom);

function  Task2Connect () {

    const[message,setMessage]=useState("");
  return (
    <div>
        <input type="text"
    value={message}
    placeholder="Enter Words"
    onChange={(e)=>setMessage(e.target.value)}/>

    <br>
    </br>
    <UpperComponent message={message}/>
    </div>
    


  )
}

export default Task2Connect