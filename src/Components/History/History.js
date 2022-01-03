import './History.css';
import React, {useState, useEffect} from 'react';
import HistoryEntry from './HistoryEntry/HistoryEntry'

function History(props) {
    const[showHistory, setShowHistory] = useState(false)
    const[operationHistory, setOperationHistory] = useState([])
    const[historyNum, setHistoryNum] = useState(0)


    useEffect(()=>{
        if (props.value === 'delete'){
          setShowHistory(false)
          setOperationHistory([])
        }
        else if (props.value !== '')
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
        setHistoryNum(operationHistory.length)
    }, [props])

    return (

      <div className="History" >
        {
        (showHistory) ? operationHistory.slice(0).reverse().map((Hist)=> (
          <HistoryEntry key = {Hist.id} operHistory = {Hist} click = {props.newHistory} num = {historyNum}/>
        ))
        : null
        }
      </div>
    );
  }
  
  export default History;
