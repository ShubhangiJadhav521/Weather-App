import React from "react";
import "./home.css";
import { useState } from "react";
import Logo from '../images/rainbow.png';
function Nav(props) {

//  const [isBlackBackground, setIsBlackBackground] = useState(false);

//  const handleToggleClick = () => {
//    setIsBlackBackground((prevState) => !prevState);
//  };

//  const backgroundColor = isBlackBackground ? 'rgb(24, 24, 26)' : 'white';

  return (
    <div className="navbar"style={{ backgroundColor: props.isBlackBackground ? 'white' : 'rgb(24, 24, 26)',color: props.isBlackBackground ?  'rgb(24, 24, 26)':'white'  }}>
     <a href="/"> <div className="logo" >
      <img src={Logo} alt="logo" width='10px' height='10px'/>
      {/* logo */}
      </div></a>
      <div>
        <label class="switch"   >
          <input type="checkbox"onClick={props.handleToggleClick} />
          <span class="slider round"></span>
        </label>

      </div>
    </div>
  );
}

export default Nav 