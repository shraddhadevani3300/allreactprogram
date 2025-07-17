import React from 'react';
import Com3_usecontext from "./Com3_usecontext";
import Com2_usecontext from "./Com2_usecontext";
import Usecontext from "./Usecontext";

const Com1_usecontext =()=>{
    
     const str="hello";

    return(
        <>
        <Usecontext.Provider value={str}>
            <h1>{str}</h1>
  
        {/* <Com2_usecontext/> */}
        <Com3_usecontext/>
        </Usecontext.Provider>
            
        </>
    )
}

export default Com1_usecontext;