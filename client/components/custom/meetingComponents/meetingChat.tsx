"use client"
import { useStore } from "@/context/globalContext";
import { useMeeting } from "@/context/meetingContext"
import { cn } from "@/lib/utils";
import { MessageCircleMore, X } from "lucide-react"
import { useEffect ,useRef} from "react";


function MeetingChat() {
  const {sendPrivatemsg,mode, setMode, publicMessages, inputMsg, setInputMsg,privateMessages,newChat,setnewChat,
  enableChats, setEnableChats, receiverId, setReceiverId, participants, sendPublicMsg } = useMeeting();
  const chatRef = useRef<HTMLDivElement | null>(null);
  const {user} = useStore();

  const onChangeHandler = (e: any) => {
    const id = e.target.value;
    if(id==="all") setMode(true);
    else setMode(false);
    setReceiverId(id);
  }

  const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(mode) sendPublicMsg(e);
    else sendPrivatemsg(e);
  }

  const activeChat = privateMessages[receiverId] || [];
  useEffect(() => {
  if (!chatRef.current) return;
  chatRef.current.scrollTop = chatRef.current.scrollHeight;
}, [publicMessages, privateMessages, receiverId, mode]);

const seeChats = ()=>{
  setEnableChats(true);
  setnewChat(false);
}

  return enableChats ?
    <div className="absolute top-120 flex flex-col items-center justify-between gap-1 right-5 w-70 shadow-md rounded-lg h-75 p-2 bg-white text-black">
      <h1 className='text-md font-semibold  w-full'>Chats</h1>
      <X className='absolute top-3 right-3 cursor-pointer' size={15} strokeWidth={1} onClick={() => setEnableChats(false)} />
      <div className=" w-full h-fit flex items-center justify-end">
        <select value={receiverId} onChange={onChangeHandler} className="text-xs outline-0 border-0" >
          <option value={"all"}>To Everyone</option>
          {participants.map((pt: { uid: string, name: string }, idx: number) => pt.uid !==user.id ? <option key={pt.uid} value={pt.uid}>{pt.name}</option>:null) }
        </select>
      </div>
      <div className="flex-1 w-full overflow-y-auto" ref={chatRef}>
        {
          mode ? publicMessages.map((dt: { from: string, message: string }, idx: number) => {
            return <div key={idx} className={cn(" w-full rounded flex p-1 flex-col justify-center h-10 mt-5", dt.from === "me" ? "items-end pr-2" : "items-start")}>
              {dt.from !== "me" && <span className="text-xs font-semibold text-neutral-400">{dt.from}</span>}
              <p className={cn("text-sm p-1 rounded",dt.from==="me"?"text-white bg-blue-600":"text-black bg-neutral-100 ")}>{dt.message}</p>
            </div>
          })
       :
       activeChat.map((dt:any,idx:number)=>{
        return <div key={idx} className={cn(" w-full rounded flex p-1 flex-col justify-center h-10 mt-5", dt.senderId === user.id ? "items-end pr-2" : "items-start")}>
              <p className={cn("text-sm p-1 rounded",dt.senderId===user.id?"text-white bg-blue-600":"text-black bg-neutral-100 ")}>{dt.message}</p>
            </div>
       })
        }
      </div>
      <form className="h-fit w-full  flex gap-2 items-center justify-between" onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Chat with other." className="text-xs  h-full flex-1 pl-1 outline-0 rounded border border-neutral-300" value={inputMsg} onChange={e => setInputMsg(e.target.value)} />
        <button type="submit" className="text-xs p-1 w-fit h-full">Send</button>
      </form>

    </div>
    :<>
    {newChat && <div className="bg-red-500 w-2 h-2 rounded-full z-60 absolute top-188 right-5"></div>}
    <MessageCircleMore size={30} strokeWidth={1} className='z-50 p-1 absolute shadow-sm top-188 right-5 text-black bg-white rounded-full  cursor-pointer' onClick={() =>seeChats() } />
    </>

}

export default MeetingChat