import './ButtonContainer.css';

function ButtonContainer(props) {

    return (
      <div className="ButtonContainer">
          <button style = {{fontSize: '150%', margin: '1%'}} onClick = {()=>props.oper('7')}>7</button>
          <button style = {{fontSize: '150%', margin: '1%'}} onClick = {()=>props.oper('8')}>8</button>
          <button style = {{fontSize: '150%', margin: '1%'}} onClick = {()=>props.oper('9')}>9</button>
          <button style = {{fontSize: '150%', margin: '1%'}} onClick = {()=>props.oper('/')}>/</button>
          <button style = {{fontSize: '150%', margin: '1%'}} onClick = {()=>props.oper('undo')}>&#9100;</button>
          <button style = {{fontSize: '150%', margin: '1%'}} onClick = {()=>props.oper('c')}>c</button>
          <button style = {{fontSize: '150%', margin: '1%'}} onClick = {()=>props.oper('4')}>4</button>
          <button style = {{fontSize: '150%', margin: '1%'}} onClick = {()=>props.oper('5')}>5</button>
          <button style = {{fontSize: '150%', margin: '1%'}} onClick = {()=>props.oper('6')}>6</button>
          <button style = {{fontSize: '150%', margin: '1%'}} onClick = {()=>props.oper('*')}>*</button>
          <button style = {{fontSize: '150%', margin: '1%'}} onClick = {()=>props.oper('(')}>(</button>
          <button style = {{fontSize: '150%', margin: '1%'}} onClick = {()=>props.oper(')')}>)</button>
          <button style = {{fontSize: '150%', margin: '1%'}} onClick = {()=>props.oper('1')}>1</button>
          <button style = {{fontSize: '150%', margin: '1%'}} onClick = {()=>props.oper('2')}>2</button>
          <button style = {{fontSize: '150%', margin: '1%'}} onClick = {()=>props.oper('3')}>3</button>
          <button style = {{fontSize: '150%', margin: '1%'}} onClick = {()=>props.oper('-')}>-</button>
          <button style = {{fontSize: '150%', margin: '1%'}} onClick = {()=>props.oper('x^2')}>x&#178;</button>
          <button style = {{fontSize: '150%', margin: '1%'}} onClick = {()=>props.oper('squareroot')}>&#8730;</button>
          <button style = {{fontSize: '150%', margin: '1%'}} onClick = {()=>props.oper('0')}>0</button>
          <button style = {{fontSize: '150%', margin: '1%'}} onClick = {()=>props.oper('.')}>.</button>
          <button style = {{fontSize: '150%', margin: '1%'}} onClick = {()=>props.oper('pi')}>&pi;</button>
          <button style = {{fontSize: '150%', margin: '1%'}} onClick = {()=>props.oper('+')}>+</button>
          <button style = {{fontSize: '150%', margin: '1%'}} onClick = {()=>props.oper('e')}>e</button>
          <button style = {{fontSize: '150%', margin: '1%', backgroundColor: 'green', border: 'lightblue'}} onClick = {()=>props.oper('=')}>=</button>
      </div>
    );
  }
  
  export default ButtonContainer;