import openSocket from 'socket.io-client';
const  socket = openSocket('https://obscure-shelf-75677.herokuapp.com/');

function subscribeToDress(dress) {
  socket.on('Dress', data => {
    console.log('data recieved now' + data)
    dress(data)
  })
}
export { subscribeToDress };
