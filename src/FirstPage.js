import React from 'react'
import Card from './Card';
export default function FirstPage({CardClick}) {

  return (
    <div className="App"> 
    <Card cardText={"טיולים"} cardOnClicks={CardClick} path={"t"} />
    <Card cardText={"אוכל"} cardOnClicks={CardClick} path={"f"}/>
    </div>
  )
}
