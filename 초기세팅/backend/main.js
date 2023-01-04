import { createServer } from 'http';
import { Server } from 'socket.io';
import express from 'express';

const app = express();
const server = createServer(app);
const io = new Server(server, {
	cors: {
		origin: ['http://localhost:4000', 'http://10.58.52.96:4000'],
		credentials: true,
	},
});

io.on('connect', socket => {
	socket.on('client', data => {
		console.log(data);
	});
	socket.emit('server', '서버입니다');
});

io.listen(3000);
