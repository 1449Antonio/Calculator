import './Screen.css'

function Screen(props) {
    return (
      <div className="Screen">
          <h1>{props.value}</h1>
      </div>
    );
  }
  
  export default Screen;