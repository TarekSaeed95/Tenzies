import React from "react";
import Die from "./Die";
import {nanoid} from 'nanoid';
// import c from "react-confetti/dist/types/Confetti";
import Confetti from "react-confetti";
export default function App(){
    let [ArrState,setNumArrState]=React.useState(allownewDice())
    let [ tenzies, setTenzies]=React.useState(false)
    let successArr=[];
    React.useEffect(()=>{
    let helderCond=ArrState.every(el=>el.isHeld)
    let equalNums=ArrState.every(el=>el.value==ArrState[0].value)
    if(helderCond&&equalNums){
        setTenzies(true)
    }
        },[ArrState])
    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    function allownewDice(){
        let randomArr=[]
        for(let i=0;i<10;i++){
            randomArr.push(generateNewDie())
        }
return randomArr
    }
function rollClick(){
    if(tenzies){
        setNumArrState(allownewDice())
        setTenzies(false)
    }
    else
    setNumArrState(prev=>
        prev.map((el)=>{
         return  el.isHeld===true?el:{value:Math.ceil(Math.random()*6),isHeld:false,id:nanoid()}
        })
        
    )

}
function holdDice(id){
    setNumArrState(prev=>prev.map(die=>{
     return   die.id===id?{...die , isHeld: !die.isHeld}:die}))
}
let dieElement=ArrState.map((el)=>{
    return <Die key={el.id} holdDice={holdDice} id={el.id} value={el.value} isHeld={el.isHeld}/>
})

    return   (<main className="main">
      <div className="container">
      {dieElement}
        </div> 
        <button className="rollBtn"  onClick={rollClick}>{tenzies==true?"New Game": "Roll"}</button>
        {tenzies===true&&<Confetti />}
    </main>)
   }