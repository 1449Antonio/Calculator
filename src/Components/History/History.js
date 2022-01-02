import './History.css';
import React, {useState, useEffect} from 'react';
import HistoryEntry from './HistoryEntry/HistoryEntry'

function History(props) {
    const[showHistory, setShowHistory] = useState(false)
    const[operationHistory, setOperationHistory] = useState([])
    

    useEffect(()=>{
        console.log(operationHistory.length)
        if (props.value !== '')
        {
          let num = operationHistory.length;
          let history = {
            id: num + 1,
            value: props.value,
            operation: props.operandHist
          };

          let temp = operationHistory;
          temp.push(history);
          setOperationHistory(temp);
          setShowHistory(true)
        }
    }, [props])

    return (

      <div className="History">
        {
        (showHistory) ? operationHistory.map((Hist)=> (
          <HistoryEntry key = {Hist.id} operHistory = {Hist}/>
        ))
        : null
        }
      </div>
    );
  }
  
  export default History;
