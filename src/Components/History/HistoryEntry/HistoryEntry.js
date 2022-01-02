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
        <p style = {{margin: '0px', position: 'relative'}}>{props.operHistory.value}<button style = {{cursor: 'pointer', width: '20px'}} onClick = {showOperands}><FontAwesomeIcon icon = {faAngleDown}></FontAwesomeIcon></button></p>
        {
            (dropDown === true) ? <p style = {{backgroundColor: 'white', border: '1px solid black', height: '20px', fontSize: '100%', margin: '0px', position: 'relative', left: '0%', display: 'inline-block'}}>{props.operHistory.operation}</p>
            : null
        }
        
    </div>
    );
  }
  
  export default HistoryEntry;
