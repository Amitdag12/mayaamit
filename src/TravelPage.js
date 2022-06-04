import React from 'react'
import Card from './Card';
export default function TravelPage({CardClick}) {
  return (
    <div className="App">
        <Card cardText={"קרוב"} path={"tc"} cardOnClicks={CardClick} />
    <Card cardText={"רחוק"} path={"tf"} cardOnClicks={CardClick} />
    </div>
  )
}
