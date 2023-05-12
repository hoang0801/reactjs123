import { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const AuthenContext = createContext({
    token:"",
    user:null,
    login:()=>{}  ,
    logout:()=>{}  
})

 export function AuthenProvider(children){
    let[token, setToken] = useState("")//token jwt
    let[ user, setUser]= useState(null)// thong tin user dang nhap

    let login=(username, password)=>{
        //goi api- await
        let token ="123456" // token sau khi goji api
        // goi api user/me
         let user={
            id:1, name: "admin"
         }
         setToken(token)
         setUser(setUser)


    }
    let logout =()=>{
        setToken("")
        setUser (null)
    }


    return <AuthenContext.Provider value={
        {
            token, user, login, logout

        }
    }>
        {children}
    </AuthenContext.Provider>

 }