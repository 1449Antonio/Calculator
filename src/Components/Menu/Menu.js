import React, {useState} from 'react'
import { useEffect } from 'react/cjs/react.development'
import Help from './Help/Help'
import Info from './Info/Info'

function Menu(props) {
    const [helpPopup, setHelpPopup] = useState(false)
    const [showPopup, setShowPopup] = useState(false)
    const [aboutPopup, setAboutPopup] = useState(false)

    const toggleHelp = () =>{
        setHelpPopup(!helpPopup)
    }

    const toggleAbout = () =>{
      setAboutPopup(!aboutPopup)
    }

    useEffect(()=>{
      if (helpPopup || aboutPopup)
        setShowPopup(true)
      else 
        setShowPopup(false)
    }, [helpPopup, aboutPopup])

    return (    
      <div className="Menu" style={{zIndex: '0'}}>
          <button onClick = {()=>toggleHelp()}>Help</button>
          <button style = {{margin: '10px'}} onClick = {()=>toggleAbout()}>About Calculator</button>
          <button onClick={()=>props.clear()}>Clear History</button>
          {
            (helpPopup && showPopup) ? <Help click={toggleHelp}/> 
            : (aboutPopup && showPopup) ? <Info click={toggleAbout}/>
            : null
          }
      </div>
    );
  }
  
  export default Menu;
