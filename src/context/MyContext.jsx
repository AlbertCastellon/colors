import { createContext, useContext, useState } from "react";

const ColorContext = createContext()

export const ColorProvider = ({children}) => {
    const [value, setValue] = useState('')
    const changeValue = (newValue) => {
        setValue(newValue)
    }

    return (
        <ColorContext.Provider value={{value, changeValue}}>
            {children}
        </ColorContext.Provider>
    )
}

export const useColor = () => useContext(ColorContext)