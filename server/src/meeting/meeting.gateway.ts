import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { PrismaService } from 'src/prisma/prisma.service';
import { supabaseAdmin } from 'src/supabase/supabase.admin';

//TODO : store canDraw and all the canvasActions change only if `user:candraw` is true ; 
@WebSocketGateway({
  cors: {
    origin: "http://localhost:3000"
  }
})
export class MeetingGateway {
  @WebSocketServer()
  server: Server;
  canvasActions: Record<string, any[]> = {}; //stores canvas per meetings based on their meeting code
  constructor(private readonly prisma: PrismaService,) { }
  // Ws connection establishemnt
  async handleConnection(client: Socket) {
    const token = client.handshake.auth?.token;
    if (!token) {
      client.disconnect();
      return false;
    }
    const { data, error } = await supabaseAdmin.auth.getUser(token);

    if (error || !data?.user) {
      client.disconnect();
      return false;
    }
    const code = client.handshake.query?.code as string;

    const meeting = await this.prisma.meeting.findUnique({
      where: {
        code: code
      }
    })

    if (!meeting) {
      client.disconnect();
      return false;
    }

    const alreadyJoined = await this.prisma.participant.findFirst({
      where: {
        meetingId: meeting.id,
        userId: data.user.id
      }
    })

    if (!alreadyJoined) {
      client.disconnect();
      return false;
    }
    client.join(code);  //Joining meeting Room : common for all
    client.join(`user:${alreadyJoined.userId}`); // Joining own private room : for private chats
    client.data.user = alreadyJoined;
    client.data.meetingRoomCode = code;
    client.to(code).emit("notify", `${alreadyJoined.name} has Joined the meeting`);
    client.emit(`canvas-init`, this.canvasActions[code] || []); //Share canvas state to new participant.
    client.emit("granted:canDraw",alreadyJoined.canDraw);
    client.emit("hello-host",alreadyJoined.role==='HOST');
    const sockets = await this.server
      .in(code)
      .fetchSockets();
    const participantArray = sockets.map((member) => ({
      uid: member.data.user?.userId,
      name: member.data.user?.name,
      canDraw: member.data.user?.canDraw,
      isHost: member.data.user?.role === "HOST",
    }));
    this.server.to(code).emit("participants", participantArray);
  }


  // for public Chat 
  @SubscribeMessage('public-message')
  sendMsgToAll(client: Socket, payload: { client_msg: string }) {
    const { client_msg } = payload;
    if (!client_msg) return;
    client.to(client.data.meetingRoomCode).emit("public-message-received", {
      from: client.data.user?.name,
      message: client_msg
    });
  }


  // for private Chat
  @SubscribeMessage('private-message')
  sendPrivateMsg(client: Socket, payload: {
    uid: string,
    message: string
  }) {
    const { uid, message } = payload;
    if (!message || !uid) return;
    this.server
      .to(`user:${uid}`)
      .emit('private-message-received', {
        from: client.data.user.userId,
        message,
      });
  }

  //for canvas Sync
  @SubscribeMessage('canvas-action')
  broadcastCanvasAction(client: Socket, canvasAction: any) {
    if (!client.data.user?.canDraw) return;
    if (!this.canvasActions[client.data.meetingRoomCode]) this.canvasActions[client.data.meetingRoomCode] = [];
    this.canvasActions[client.data.meetingRoomCode].push(canvasAction);
    client.to(client.data.meetingRoomCode).emit('canvas-action', canvasAction);
  }

  //for multi-Cursor Sync
  @SubscribeMessage("cursor-move")
  handleCursorMovement(client:Socket,cursorPos:{x:number,y:number}){
    this.server.to(client.data.meetingRoomCode).emit("cursor-change",{...cursorPos , name:client.data.user?.name, uid:client.data.user?.userId,canDraw:client.data.user?.canDraw});
  }

  //canDraw  : grantPermission 
  @SubscribeMessage("grant:canDraw")
  async GrantCanDraw(client:Socket,uid:any){
    if(!client.data.user) return;
    client.data.user.canDraw = true;
    client.emit("granted:canDraw",true);
    this.server.to(client.data.meetingRoomCode).emit("canDraw-permission-granted",)
  }

  // Disconnect 
  async handleDisconnect(client: Socket) {
    if (!client.data?.meetingRoomCode || !client.data?.user) return;
    client.to(client.data.meetingRoomCode).emit("notify", `${client.data.user.name} has left the meeting`);
    const sockets = await this.server
      .in(client.data.meetingRoomCode)
      .fetchSockets();
    if (sockets.length === 0) delete this.canvasActions[client.data.meetingRoomCode];


    const participantArray = sockets.map((member) => ({
      uid: member.data.user?.userId,
      name: member.data.user?.name,
      canDraw: member.data.user?.canDraw,
      isHost: member.data.user?.role === "HOST",
    }));
    this.server.to(client.data.meetingRoomCode).emit("participants", participantArray);  // to update the participant array on the frontend
  }

}
