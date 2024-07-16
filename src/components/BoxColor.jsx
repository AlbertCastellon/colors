import { useColor } from "../context/MyContext";
import { useEffect } from "react";


function boxColor ({color, index}) {
  const { value } = useColor()
    if(value  === color){
      return (
        <>
        <div key={index} className={`box ${color}full`}>
          <h3>Yes I'm {value} color</h3>
        </div>
      </> 
      )
    }else{
      return (
        <>
          <div key={index} className={`box ${color}`}>
            <h3>I'm not a {value} color</h3>
          </div>
        </> 
      )
    }
    
}

export default boxColor;  
