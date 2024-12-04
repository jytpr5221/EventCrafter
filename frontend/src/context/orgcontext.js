import {createContext, useContext, useState} from 'react'


export const OrganizerContext= createContext()

export default   OrganizerContextProvider=({children})=>{

    const [org,setOrg]=useState(null)
    return (

        <OrganizerContext.Provider value={{org,setOrg}}>

            {children}
        </OrganizerContext.Provider>
    )
}