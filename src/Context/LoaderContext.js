import React, { createContext, useState } from 'react'

export const LoaderContext = createContext();

export default function LoaderContextProvider(props) {
    const [loader,setLoader] = useState(false);
    return (
        <LoaderContext.Provider value={{loader,setLoader}}>
            {props.children}
        </LoaderContext.Provider>
    )
}