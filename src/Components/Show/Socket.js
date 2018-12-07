import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:3000/');
// const  socket = openSocket('https://obscure-shelf-75677.herokuapp.com/');

function getDresses(dresses) {
  console.log('getting dresses')
  socket.emit('Get Dresses', dresses)
  socket.on('Current Dresses', data => {
    dresses(data)
  })
}

function subscribeToDress(dress) {
  socket.on('Dress', data => {
    console.log('data recieved now' + data)
    dress(data)
  })
}

function subscribeToRating(rating) {
  socket.on('Rating', data => {
    console.log('recieving rating' + data)
    rating(data)
  })
}

function submitRating(id, rating){
  console.log('sending rating ' + id + rating)
  socket.emit('Submit Rating', [id, rating])
}

function getRating(id) {
  console.log('getting data ' + id)
  socket.emit('Get Rating', id)
}

export { getDresses, subscribeToDress, subscribeToRating, submitRating, getRating };
