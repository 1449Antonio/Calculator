import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import './Help.css'
function Help(props) {
    return (
      <div className="InfoModal">
        <div className="InfoModalContent">
          <p style={{display: 'inline-block'}}>This calculator supports keybinding entries. The equal sign is equivalent to the Enter and Equal Sign keys on your keyboard.</p>
          <button onClick={()=>props.click()} style={{position: 'fixed', display: 'inline-block', right: '0.5%', backgroundColor: 'white', border: '1px solid white'}}><FontAwesomeIcon icon = {faTimesCircle}/></button>
        </div>
      </div>
    );
  }
  
  export default Help;
