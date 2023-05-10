import { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const AuthenContext = createContext({
    token:"",
    setToken:()=>{

    }
})

 export function AuthenProvider(children){
    let[token, setToken] = useState("")
    let[ user, setUser]= useState(null)

    let login=(username, password)=>{
        //goi api- await
        let


    }
    let logout =()=>{
        setToken("")
        setUser ("")
    }


    return <AuthenContext.Provider value={
        {
            token, setToken

        }
    }>
        {children}
    </AuthenContext.Provider>

 }