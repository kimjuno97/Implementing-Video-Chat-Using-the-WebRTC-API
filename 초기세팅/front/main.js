import { io } from 'socket.io-client';
/** 본인 비디오 */
const myFace = document.querySelector('.myFace');
/** 카메라 on/off 버튼 */
const cameraBtn = document.querySelector('.camera');
/** 스피커 on/off 버튼 */
const speakerBtn = document.querySelector('.speaker');
/** 상대방 비디오  */
const peerFace = document.querySelector('.peerFace');
/** 본인 MediaStream 저장 */
let myStream;
/** speaker */
let muted = false;
/** video */
let cameraOff = false;
/** websocket으로 통신 */
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
