import { useState, useRef, useEffect } from "react";
import './App.css';
import Card from './Card';
import FirstPage from "./FirstPage";
import TravelPage from "./TravelPage";
import FoodPage from "./FoodPage";

function App() {
  var pathG;
  const [pageState, setPageState] = useState(<FirstPage CardClick={CardClick}  />);
  const [places, setPlaces] = useState([]);



  useEffect(() => {
    setPageState(<FirstPage CardClick={CardClick}  />)
  }, [])
  useEffect(() => {
    let b=[]
    {places.forEach(element => {
      
      b.push( <Card cardText={element.replace("&#39;","'").replace("&quot;","'")} classs={"finalCard"}/>);
    })} 
    console.log(b);
    setPageState(b[Math.floor(Math.random() * b.length)]);
  }, [places])




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
            return;
          }

          break;   
    }
    setPageState(page);
  }
  function GetAllNames(data){
    const results=[];

    while(data.indexOf('<div class="floatnone">')!=-1){
      data=data.substring(data.indexOf('<div class="floatnone">'));//get each place div
      data=data.substring(data.indexOf('title'));//get title
      data=data.substring(7);
      console.log(data.substring(0,data.indexOf('"')));
      results.push(data.substring(0,data.indexOf('"')).replaceAll(" "," "));
    }
    return results;
  }
  function GetOption(path){
    pathG=path;
    fetch('https://thawing-waters-22203.herokuapp.com/https://inature.info/wiki/'+path)
    .then(response => response.text())
    .then(data=>{
      console.log("here");
      const place=GetAllNames(data);
      place.shift();
      setPlaces(place);
      
  
  
    });
  }
  function ChooseTravel(kind){
  
    const c=["טיולים_בכרמל", "טיולים_בחיפה","טיולים_בחוף_הכרמל"],
     f=["טמפלים_וזרימות עונתיות בצפון", "טיולים_ברמת הגולן","טיולים_בגליל_העליון","טיולים_בגליל_התחתון","טיולים_סביב_הכנרת","נחלים_בצפון"];
     switch(kind){
       case "f":
        GetOption(f[Math.floor(Math.random() * f.length)])
        break;
        case "c":
          GetOption(c[Math.floor(Math.random() * c.length)])
          break;

     }

 // 
  }
  return (
   <div className="App">
<button onClick={returnToStart} >חזור להתחלה</button>  
{pageState}
     
  
</div>
    
  );
}

export default App;
