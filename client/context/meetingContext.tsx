"use client"
import { useRouter, useParams } from "next/navigation";
import { useStore } from "@/context/globalContext";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client"
const MeetingContext = createContext<any>({});

export const MeetingContextProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const { code } = useParams<{ code: string }>();
    const { accessToken, user, notifyAlert ,url} = useStore();
    const socketRef = useRef<any>(null);
    const [inputMsg, setInputMsg] = useState<string>("");
    const [participants, setParticipants] = useState<{ uid: string, name: string, isHost: boolean, canDraw: boolean}[]>([]);
    const [receiverId, setReceiverId] = useState<string>("all")
    const [name, setName] = useState<string>("");
    const [audio, setAudio] = useState<boolean>(false);
    const [video, setVideo] = useState<boolean>(false);
    const [enableParticipants, setEnableParticipants] = useState<boolean>(false);
    const [isHost, setIsHost] = useState<boolean>(false);
    const [enableChats, setEnableChats] = useState<boolean>(false);
    const [privateMessages, setPrivateMessages] = useState<any>({});
    const [publicMessages, setPublicMessages] = useState<{ from: string, message: string }[]>([]);
    const [mode, setMode] = useState<boolean>(true);  // true->Public Mode , false->private Mode. : For Handling in-meeting-Chats
    const [newChat, setnewChat] = useState<boolean>(false);
    const [cursors, setCursors] = useState<any>({});
    const emitCursorPosition = useRef<(e: MouseEvent) => void | null>(null);
    const [canDraw, setCanDraw] = useState<boolean>(false);
    const [liveKitToken, setLivekitToken] = useState<string>("");
    const [screen,setScreen] =useState<boolean>(false);




    const validate = async () => {
        try {
            const resp = await fetch(`${url}/meeting/join/${code}`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${accessToken}`
                }
            });

            const parsedResp = await resp.json();
            if (!resp.ok) {
                router.push(`/meet`);
                return false;
            }
            return true;

        } catch (err) {
            console.error(err);
            router.push(`/meet`);
            return false;
        }
    }

    const establishSocketConnection = () => {
        if (socketRef.current) return;

        socketRef.current = io(url, {
            auth: {
                token: accessToken
            }, query: {
                code
            }
        });

        console.log(`Welcome To Meeting:${code}`);

        //Fetch all the participants in the room
        socketRef.current.on("participants", (data: { uid: string, name: string, isHost: boolean, canDraw: boolean}[]) => {
            setParticipants([...data]);
        })

        //notifications
        socketRef.current.on("notify", (notification: string) => {
            return notifyAlert(notification);
        })

        socketRef.current.on("public-message-received", (data: { from: string, message: string }) => {
            setPublicMessages((prev: { from: string, message: string }[]) => {
                return [...prev, data];
            })
            setMode(true);
            setReceiverId("all");
            if (enableChats === false) {
                notifyAlert(`You have a new message.`);
                setnewChat(true);
            }
            return;

        })

        socketRef.current.on("private-message-received", (data: { from: string, message: string }) => {
            setPrivateMessages((prev: any) => ({
                ...prev,
                [data.from]: [
                    ...(prev[data.from] || []),
                    { senderId: data.from, message: data.message },
                ],
            }));
            setMode(false);
            setReceiverId(data.from);
            if (enableChats === false) {
                notifyAlert(`You have a new message.`);
                setnewChat(true);
            };
            return;
        })

        socketRef.current.on("granted:canDraw", (flag: boolean) => {
            setCanDraw(flag);
        })

        socketRef.current.on("hello-host", (flag: boolean) => {
            setIsHost(flag)}
        );
    }

    const sendPublicMsg = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!socketRef.current) return;
        socketRef.current.emit("public-message", { client_msg: inputMsg });
        setPublicMessages((prev: { from: string, message: string }[]) => {
            return [...prev, { from: "me", message: inputMsg }];
        })
        setInputMsg("");
    }

    const sendPrivatemsg = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!socketRef.current) return;
        if (receiverId === 'all') return;
        socketRef.current.emit("private-message", { uid: receiverId, message: inputMsg });
        setPrivateMessages((prev: any) => ({
            ...prev,
            [receiverId]: [
                ...(prev[receiverId] || []),
                { senderId: user.id, message: inputMsg },
            ],
        }));
        setInputMsg("");
    }

    const emitCanvasAction = (newAction: any) => {
        return socketRef.current?.emit("canvas-action", newAction);
    }

    const fetchLiveKitToken = async () => {
        try {
            const resp = await fetch(`${url}/meeting/livekit-token/new`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    "authorization": `Bearer ${accessToken}`
                },
                body: JSON.stringify({ roomCode: code })
            });

            const tkn = await resp.text();
            setLivekitToken(tkn);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        if (!accessToken || !code || !user) return;
        setName(user.email.split('@')[0]);
        validate().then((resp) => {
            if (resp) {
                establishSocketConnection();
            }
        }).catch((err: any) => {
            console.error(err);
            router.push("/meet");
        })


        fetchLiveKitToken();

        return () => {
            socketRef.current?.disconnect();
            socketRef.current = null;
        };
    }, [code, accessToken]);

    useEffect(() => {
        const cursorObj: any = {};
        for (let pt of participants) {
            cursorObj[pt.uid] = { x: 50, y: 50, name: pt.name, canDraw: pt.canDraw };
        }
        setCursors(cursorObj);
    }, [participants])

    useEffect(() => {
        let lastSent = 0;
        emitCursorPosition.current = (e: MouseEvent) => {
            const now = Date.now();
            if (now - lastSent < 40) return; // ~25fps

            lastSent = now;

            socketRef.current?.emit("cursor-move", {
                x: e.clientX,
                y: e.clientY,
            });
        };
    }, [socketRef.current]);

    useEffect(() => {
        const socket = socketRef.current;
        if (!socket) return;

        const handler = (e: MouseEvent) => {
            emitCursorPosition.current?.(e);
        };

        window.addEventListener("mousemove", handler);

        socket.on("cursor-change", (data: any) => {
            setCursors((prev: any) => ({
                ...prev,
                [data.uid]: {
                    x: data.x,
                    y: data.y,
                    canDraw: data.canDraw,
                    name: data.name,
                },
            }));
        });

        return () => {
            window.removeEventListener("mousemove", handler);
            socket.off("cursor-change");
        };
    }, [socketRef.current]);


    return (<MeetingContext.Provider value={{
        canDraw, liveKitToken,
        mode, setMode, inputMsg, setInputMsg, emitCanvasAction, socketRef, newChat, setnewChat, cursors,
        publicMessages, privateMessages, receiverId, setReceiverId, enableChats, setEnableChats, enableParticipants,
        setEnableParticipants, participants, audio, setAudio, video, setVideo, name, validate, establishSocketConnection,
        sendPublicMsg, sendPrivatemsg, code, isHost,screen,setScreen
    }}>
        {children}
    </MeetingContext.Provider>);
}


export const useMeeting = () => {
    return useContext(MeetingContext);
}

