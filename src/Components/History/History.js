import './History.css';
import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

function History(props) {
    const[currentHistory, setCurrentHistory] = useState('');
    const[showHistory, setShowHistory] = useState(false)
    const[dropDown, setDropDown] = useState(false)
    const[operandHistory, setOperandHistory] = useState('')
    
    const showOperands = () =>{
      if (dropDown === false)
        setDropDown(true)
      else
        setDropDown(false)
    }

    useEffect(()=>{
        if (props.value !== '')
        {
          setCurrentHistory(props.value)
          setShowHistory(true)
        }
        if (props.operandHist !== '')
          setOperandHistory(props.operandHist)
    }, [props])

    return (

      <div className="History">
        {
        (showHistory === true) ? <p style = {{margin: '0px'}}>{currentHistory}<button style = {{cursor: 'pointer', width: '20px'}} onClick = {showOperands}><FontAwesomeIcon icon = {faAngleDown}></FontAwesomeIcon></button></p>
        : <p>{currentHistory}</p>
        }

        {
        (dropDown === true) ? <p style = {{backgroundColor: 'white', border: '1px solid black', height: '20px', fontSize: '100%', margin: '0px', width: '30px', position: 'absolute', left: '48.5%'}}>{operandHistory}</p>
        : console.log('')
        }
      </div>
    );
  }
  
  export default History;
