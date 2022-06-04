import React from 'react'
import "./Moudles.css";
export default function Card({cardText,cardOnClicks,path}) {
 function HandleClick(){
    cardOnClicks(path);
 }
  return (
    <div  className={"card"} onClick={HandleClick}>
        {cardText}
    </div>
  )
}
