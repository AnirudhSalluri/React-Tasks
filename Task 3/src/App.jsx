import React, { createContext, useEffect, useState } from 'react'
import ErrorComponent from './ErrorComponent'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorTest from './ErrorTest'
import Notification from './Notification'
import Inputform from './Inputform'
import UncontrolledForm from './UncontrolledForm'
import clsx from 'clsx'


export const ContextProvider = createContext();

const App = () => {
  const [notopen,setnoteopen] =useState(false)
  const [dark,setdark] = useState(`bg-blue-200 w-full h-screen`);

  useEffect(()=>{
    setTimeout(()=>{
      setnoteopen(false);
    },5000)
  });


  return (
   <div className={dark}>
   <ContextProvider.Provider value={{dark,setdark}}>
   <ErrorBoundary FallbackComponent={ErrorComponent} onReset={()=>console.log("Reset Triggered")}>
    <ErrorTest/>
   </ErrorBoundary>
  <Inputform/>
  <UncontrolledForm/>
  </ContextProvider.Provider>
  <button onClick={()=>setnoteopen(!notopen)}>Open Notification</button>
  {notopen&& <Notification/>}
   </div>
  )
}

export default App;