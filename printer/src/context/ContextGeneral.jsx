import React, {useState} from 'react'

export const Context = React.createContext();

export default function ContextGeneral(props) {

const [uno ,setUno] = useState("")

  return (
    <div>
      <Context.Provider value={{uno, setUno}}>
        {props.children}
      </Context.Provider>
    </div>
  )
}