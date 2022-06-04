import { useState, useRef, useEffect } from "react";
import './App.css';
import Card from './Card';
import FirstPage from "./FirstPage";
import TravelPage from "./TravelPage";
import FoodPage from "./FoodPage";

function App() {
  const [pageState, setPageState] = useState(<></>);
  useEffect(() => {
    setPageState(<FirstPage CardClick={CardClick} />)
  }, [])
  function returnToStart(){
    setPageState(<FirstPage CardClick={CardClick} />)
  }
  function CardClick(pageClicked){
    let page=<FirstPage CardClick={CardClick} />;
    switch(pageClicked[0]){
      case 'f': 
          if(pageClicked.length==1)
          {
            page= <FoodPage CardClick={CardClick} />;
          }else{
            
          }
          
          break;
      case 't': 
          if(pageClicked.length==1)
          {
            page= <TravelPage CardClick={CardClick} />;
          }else{
            ChooseTravel(pageClicked[1])
          }

          break;   
    }
    setPageState(page);
  }
  function ChooseTravel(kind){
  
    const c=["טיולים_בכרמל", "טיולים_בחיפה","טיולים_בחוף_הכרמל"],
     f=["טמפלים_וזרימות עונתיות בצפון", "טיולים_ברמת הגולן","טיולים_בגליל_העליון","טיולים_בגליל_התחתון","טיולים_סביב_הכנרת","נחלים_בצפון"];
     fetch('https://inature.info/wiki/'+c[0])
  .then(response => response.text())
  .then(data => console.log("data:"+data)
 );// var doc = new DOMParser().parseFromString(xmlString, "text/xml")
  }
  return (
    <>
<button onClick={returnToStart} >חזור להתחלה</button>  
{pageState}
     
  
    
    </>
  );
}

export default App;
