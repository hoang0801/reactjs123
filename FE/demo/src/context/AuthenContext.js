// import { access } from "fs";
import { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { LoginAPI } from "../service/Login.service";
import { async } from "q";

export const AuthenContext = createContext({
    isAuthenticated: false,
    isLoading: true,
    accessToken:"",
    setToken:()=>{},
    logout:()=>{},
    login: ()=>{}
})

 export function AuthenProvider(children){
    let[accessToken, setToken] = useState("")
    let[isAuthenticated, setAuthenticated]= useState(false)
    let[isLoading, setLoading]= useState(true)

    useEffect(()=>{
        if( localStorage.getItem("accessToken")){
            setAuthenticated(true)
            setLoading(false)
            setToken(localStorage.getItem("accessToken"))
        }else{
            setAuthenticated(false)
            setLoading(false)
        }

    },[])

    const login= async(token)=>{
        console.log(token)
        setAuthenticated(true)
        setLoading(false)
        
        setToken(token.accessToken)
        //luu token them vao localstorage
        localStorage.setItem("accessToken", token.accessToken)
    }
    
    const logout =()=>{
        setAuthenticated(false)
        setLoading(false)
        setToken("")
        
    }


    return <AuthenContext.Provider value={
        {
            isAuthenticated, 
            isLoading,
            accessToken, 
            login, 
            logout
        }
    }>
        {children}
    </AuthenContext.Provider>

 }