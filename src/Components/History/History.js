import './History.css';
import React, {useState, useEffect} from 'react';


function History(props) {
    const[currentHistory, setCurrentHistory] = useState('');
    
    useEffect(()=>{
        if (props.value !== '')
             setCurrentHistory(props.value)
    }, [props])
    return (
      <div className="History">
        <p>{currentHistory}</p>
      </div>
    );
  }
  
  export default History;
