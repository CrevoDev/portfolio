const chatRealtime = {
    id: 'chat-realtime',
    title: 'Chat em Tempo Real — WebSocket Gateway',
    language: 'TypeScript',
    summary: 'Gateway NestJS com WebSocket para mensagens em tempo real entre usuários conectados à plataforma.',
    files: [
        {
            name: 'chat.gateway.ts',
            language: 'typescript',
            code: `@WebSocketGateway({ cors: true, namespace: '/chat' })
export class ChatGateway implements OnGatewayConnection {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket) {
    client.join(\`room:\${client.handshake.query.roomId}\`);
  }

  @SubscribeMessage('sendMessage')
  handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() payload: { roomId: string; text: string; userId: string },
  ) {
    const message = {
      id: randomUUID(),
      text: payload.text,
      userId: payload.userId,
      createdAt: new Date().toISOString(),
    };

    this.server.to(\`room:\${payload.roomId}\`).emit('newMessage', message);
    return message;
  }
}`
        }
    ]
};

export default chatRealtime;
