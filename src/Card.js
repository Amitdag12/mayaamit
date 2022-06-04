import React from 'react'
import "./Moudles.css";
export default function Card({cardText,cardOnClicks,path,classs=""}) {
 function HandleClick(){
    cardOnClicks(path);
 }
  return (
    <div  className={`card ${classs}`}  onClick={HandleClick}>
        {cardText}
    </div>
  )
}
