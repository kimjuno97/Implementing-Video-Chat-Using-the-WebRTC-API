import { io } from 'socket.io-client';
const socket = io('ws://localhost:3000', {
	withCredentials: true,
});

socket.on('connect', () => {
	console.log('connect');
});

socket.on('server', data => {
	console.log(data);
});

socket.emit('client', '클라이언트 입니다.');
