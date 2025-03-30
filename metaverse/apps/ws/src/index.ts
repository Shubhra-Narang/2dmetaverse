import { WebSocketServer } from 'ws';
import { User } from './User';

const wss = new WebSocketServer({ port: 3001 });

wss.on('connection', function connection(ws) {
  console.log("user connected");
  let user = new User(ws);
  ws.on('error', console.error);

  ws.on('close', () => {
    user?.destroy();
  });

  // Handle voice communication messages
  ws.on('message', (message) => {
    const data = JSON.parse(message.toString());
    if (data.type === 'voice') {
      // Broadcast voice data to other users in the room
      wss.clients.forEach(client => {
        if (client !== ws && client.readyState === client.OPEN) {
          client.send(JSON.stringify(data));
        }
      });
    }
  });
});