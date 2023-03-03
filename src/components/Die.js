export default function Die(props){
    
    let style=props.isHeld?{backgroundColor:"#4caf50",
color:"white"}:{backgroundColor:""}
return (<div className="die" style={style} onClick={()=>{props.holdDice(props.id)}}>
        <h2 className="die-text">{props.value}</h2>
    </div>)
}