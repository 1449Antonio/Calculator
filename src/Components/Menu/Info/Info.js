import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './Info.css'

function Info(props) {
    return (
      <div className="InfoModal">
        <div className="InfoModalContent">
          <p style={{display: 'inline-block'}}>This calculator was created by Antonio Gonzalez, using React.js. This was mainly created in order to get more experience with React.js, and supports simple operations. More functionality will be added in the future, such as order of operations and keybinding characters for special characters, such as pi.</p>
          <button onClick={()=>props.click()} style={{position: 'fixed', display: 'inline-block', right: '0.5%', backgroundColor: 'white', border: '1px solid white'}}><FontAwesomeIcon icon = {faTimesCircle}/></button>
        </div>
      </div>
    );
  }
  
  export default Info;
