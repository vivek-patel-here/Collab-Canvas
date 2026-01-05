"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabaseClient } from '@/app/supabase.config'
import { useSnackbar } from 'notistack'
interface contextInterface {
    user:any,
    setUser : any,
    accessToken:any,
    notifyAlert:any
    ,url:string|null
}

const StoreContext = createContext<contextInterface>({user:null,setUser:null,accessToken:null,notifyAlert:null,url:null});

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState<any | null>(null);
    const [accessToken,setToken] = useState<any>(null);
    const { enqueueSnackbar } = useSnackbar();
    // const url = "http://localhost:8000";
    const url = "https://collab-canvas-server-wh3i.onrender.com"

    const notifyAlert =(message :string)=>{
        return enqueueSnackbar(message,{autoHideDuration:2000});
    }

    useEffect(() => {
        const isAuthhandler = async () => {
            const { data: { session } } = await supabaseClient.auth.getSession();
            setUser(session?.user);
            setToken(session?.access_token);
        }

        isAuthhandler();
    },[user]);


    return <StoreContext.Provider value={{user,setUser,accessToken,notifyAlert,url}}>
        {children}
    </StoreContext.Provider>
}


export default StoreContext

export const useStore = ()=>{
    return useContext(StoreContext);
}