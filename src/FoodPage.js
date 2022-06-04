import React from 'react'
import Card from './Card';
export default function FoodPage({CardClick}) {
  return (
    <div className="App">
        <Card cardText={"קינוח"} path={"fd"} cardOnClicks={CardClick} />
    <Card cardText={"על בסיס פחממה"} path={"fc"} cardOnClicks={CardClick}  />
    <Card cardText={"על בסיס בשר"} path={"fm"} cardOnClicks={CardClick}  />
    <Card cardText={"מרק"} path={"fs"} cardOnClicks={CardClick}  />
    </div>
  )
}
