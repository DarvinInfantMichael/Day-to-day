import { useState } from "react";
import UserCard from "../../Day9/UserCard"
import withBackgroundColor from "../../hoc/withBackgroundColor"

const ColorUserCard = withBackgroundColor(UserCard);



function Task1Connect () {
    const[color,setColor]=useState("");
  return (
    <div>
        <input type="text"
        placeholder="Enter a Color"
        value={color}
        onChange={(e)=>setColor(e.target.value)}/>

        <br>
        </br>

        <ColorUserCard name="Darvin" role="FullStack Developer" color={color}/>
    </div>
  )
}

export default Task1Connect