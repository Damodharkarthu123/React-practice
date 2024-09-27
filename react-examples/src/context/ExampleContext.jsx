

import { createContext,useContext, useState } from "react";

const GiftContext = createContext()

export const GiftProvider =({childeren})=>{

    const [surprise ,setsurprise]=useState('Apple')

    return(
        <GiftContext.Provider value={{surprise ,setsurprise}}>
            {childeren}
        </GiftContext.Provider>
    )
}

export const useData =()=> useContext(GiftContext)