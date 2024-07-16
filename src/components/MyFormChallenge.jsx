import { useRef } from "react";
import  { useColor } from '../context/MyContext'

function MyForm() {
  const inputRef =  useRef(null)
  const {value, changeValue} = useColor()

  return (
    <>
      <input
        id="color"
        type="text"
        placeholder="introduce un color"
        className="input"
        onChange={() => changeValue(inputRef.current.value)}
        value={value}
        ref={inputRef}
      />
    </>
  );
}

export default MyForm;