import Screen from './Components/Screen/Screen'
import ButtonContainer from './Components/Buttons/ButtonContainer'
import History from './Components/History/History'
import Menu from './Components/Menu/Menu'
import './App.css';
import React, {useState, useEffect} from 'react';


function App() {
  const [screenVal, setScreenVal] = useState('0');
  const [operands, setOperands] = useState('');
  const [operand1, setOperand1] = useState(Infinity);
  const [operation, setOperation] = useState('');
  const [operand2, setOperand2] = useState(Infinity);
  const [operationIndex, setOperationIndex] = useState(-1);
  const [executed, setExecuted] = useState(false);
  const [historyValue, setHistoryValue] = useState('')

  const createOperand = (operand, oneOrTwo) => {

      for (let i = 0; i < operand.length; i++){
        if (operand.at(i) === '\u00B2'){
          let temp = parseInt(operand.at(i-1))
          temp = Math.pow(temp, 2)
          operand = (i !== operand.length - 1) ? (operand.substring(0, i-1) + toString(temp) + operand.substring(i+1)) 
          : (i === 1) ? (toString(temp))
          : (operand.substring(0, i-1) + toString(temp))
        }
        else if (operand.at(i) === '\u221A'){
          let temp = parseInt(operand.at(i+1))
          temp = Math.sqrt(temp)
          operand = (i !== operand.length - 2) ? (operand.substring(0,i) + toString(temp) + operand.substring(i+2))
          : (operand.substring(0,i) + toString(temp))
        }
      }
      if (oneOrTwo === 1)
        setOperand1(parseInt(operand))
      else
      {
        setOperand2(parseInt(operand))
      }
      
  }
  const executeOperation = (input) =>{
      if (operation === '+')
        setOperands(operand1 + operand2)
      else if (operation === '-')
        setOperands(operand1 - operand2)
      else if (operation === '*')
        setOperands(operand1 * operand2)
      else 
        setOperands(operand1 / operand2)

      setExecuted(true)
      setOperation('')
      setOperand1(Infinity)
      setOperand2(Infinity)
  }

  const operClick = (val) =>{

    if (val === 'c'){
      setOperands('')
      setOperand1(Infinity)
      setOperand2(Infinity)
      setOperation('')
    }

    else if (val === 'undo'){
      if (operands.length === 1)
        setOperands('');
      else if (operation !== '')
      {
        setOperation('')
        setOperands(operands.substring(0, operands.length - 1));
      }
      else if (operand1 !== Infinity)
      {
        setOperand1(Infinity)
        setOperands(operands.substring(0, operands.length - 1));
      }
      else
         setOperands(operands.substring(0, operands.length - 1));
    }

    else if (val === 'x^2'){
      setOperands(operands + '\u00B2')
    }

    else if (val === 'pi'){
      setOperands(operands + '\u03C0')
    }

    else if (val === 'squareroot'){
      setOperands(operands + '\u221A')
    }

    else if (val === '='){
      createOperand(operands.substring(operationIndex+1), 2);
    }

    else if (val === '+' || val === '-' || val === '*' || val ==='/'){
      if (operands.length === 0){
        setOperands('0' + val);
        setOperand1(0);
      }
      else{
        createOperand(operands, 1);
        setOperands(operands + val)
      }
      setOperation(val)
    }
    else {
      setOperands(operands + val);
    }
  }

  useEffect(() =>{
    if (operands.length !== 0)
      setScreenVal(operands)
    else
     setScreenVal('0')

    if (operand1 === Infinity)
     setOperationIndex(-1)
    else if (operationIndex === -1){
     for (let i = 0; i < operands.length; i++)
       if (operands.at(i) === '+' || operands.at(i) === '-' || operands.at(i) === '*' || operands.at(i) === '/')
         setOperationIndex(i);
    }

    if (executed === true)
    {
      setExecuted(false)
      setHistoryValue(operands)
    }
    else
    {
      setHistoryValue('')
    }

    if (operand2 !== Infinity)
       executeOperation('');
    window.addEventListener('keydown', buttonSelection)
    return() => {
      window.removeEventListener('keydown', buttonSelection)
    }

  }, [operands, operand1, operand2])

  const buttonSelection = (event) => {
    if (event.key === '0' || event.key === '1' || event.key === '2' || event.key === '3' ||
        event.key === '4' || event.key === '5' || event.key === '6' || event.key === '7' ||
        event.key === '8' || event.key === '9' || event.key === '-' || event.key === '+' ||
        event.key === '/' || event.key === '*' || event.key === '(' || event.key === ')' || 
        event.key === '=' || event.key === 'c' || event.key === 'e') {

          operClick(event.key);          
        }
    else if (event.key === 'Backspace')
        operClick('undo');
    else if (event.key === 'Enter')
        operClick('=')
       
  }
  return (
    <div className="App">
        <Menu></Menu>
        <History value = {historyValue}></History>
        <Screen value = {screenVal}/>
        <ButtonContainer oper = {operClick} /> 
    </div>
  );
}

export default App;
