import { createContext,useContext,useState } from "react";

const Mycontext=createContext();
export const  MyContextProvider=({children})=>{

    const [counter,setCounter]= useState();

    const increment=()=>{
        setCounter((counter)=>{counter+1});
    }
        const decrement=()=>{
            setCounter((counter)=>{counter-1});
        }    
return(<Mycontext.Provider value={{counter,increment,decrement}}>
    {children}
</Mycontext.Provider>
    
    )

}

export const useMyContext=()=>{
    return(useContext(Mycontext));
}