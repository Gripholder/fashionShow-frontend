import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:3000');

function subscribeToDress(dress) {
  socket.on('Dress', data => {
    console.log('data recieved now' + data)
    dress(data)
  })
}
export { subscribeToDress };
