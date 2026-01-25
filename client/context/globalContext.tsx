"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabaseClient } from '@/app/supabase.config'
import { useSnackbar } from 'notistack'
interface contextInterface {
    user: any,
    setUser: any,
    accessToken: any,
    notifyAlert: any
    , url: string,

    fetchAllUserMeeting: any,
    meetList: any
}

const StoreContext = createContext<contextInterface>({
    user: null,
    setUser: null,
    accessToken: null,
    notifyAlert: null,
    url: "https://collab-canvas-server-wh3i.onrender.com",
    fetchAllUserMeeting: null,
    meetList: null
});

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState<any | null>(null);
    const [accessToken, setToken] = useState<any>(null);
    const [meetList, setPrevMeetList] = useState<any[]>([]);
    const { enqueueSnackbar } = useSnackbar();
    // const url = "http://localhost:8000";
    const url = "https://collab-canvas-server-wh3i.onrender.com";

    const notifyAlert = (message: string) => {
        return enqueueSnackbar(message, { autoHideDuration: 2000 });
    }

    const fetchAllUserMeeting = async () => {
        if (!accessToken) return;
        try {
            const response = await fetch(`${url}/meeting/all`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "authorization": `Bearer ${accessToken}`
                }
            })
            if (!response.ok) return notifyAlert("Unable to fetch user's previous meeting records!");
            const parsedResp: any[] = await response.json();
            setPrevMeetList(parsedResp);
        } catch (err) {
            console.error("Unable to fetch Meeting Info.\nError : ", err);
        }

    }

    useEffect(() => {
        const { data: authListener } =
            supabaseClient.auth.onAuthStateChange((_event, session) => {
                setUser(session?.user ?? null);
                setToken(session?.access_token ?? null);
            });

        return () => {
            authListener.subscription.unsubscribe();
        };

    }, []);

    useEffect(() => {
        if (!accessToken) return;
        fetchAllUserMeeting();
    }, [accessToken])


    return <StoreContext.Provider value={{ user, setUser, accessToken, notifyAlert, url, fetchAllUserMeeting, meetList }}>
        {children}
    </StoreContext.Provider>
}


export default StoreContext

export const useStore = () => {
    return useContext(StoreContext);
}