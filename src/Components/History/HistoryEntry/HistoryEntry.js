import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function HistoryEntry(props) {
    const[dropDown, setDropDown] = useState(false)
   
    const showOperands = () =>{
        setDropDown(!dropDown)
      }
    return (
    <div className="HistoryEntry">
        <div style = {{margin: '0px', position: 'relative'}}><div style={{display: 'inline-block'}} onClick = {()=>props.click(props, props.num)}>{props.operHistory.value}</div><button style = {{cursor: 'pointer', width: '20px', display: 'inline-block'}} onClick = {showOperands}><FontAwesomeIcon icon = {faAngleDown}></FontAwesomeIcon></button></div>
        { 
            (dropDown === true) ? <p style = {{backgroundColor: 'white', border: '1px solid black', height: '20px', fontSize: '100%', margin: '0px', position: 'relative', left: '0%', display: 'inline-block'}}>{props.operHistory.operation}</p>
            : null
        }
        
    </div>
    );
  }
  
  export default HistoryEntry;
