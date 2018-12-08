import openSocket from 'socket.io-client';
const  socket = openSocket('https://obscure-shelf-75677.herokuapp.com/');

function getDresses(dresses) {
  socket.emit('Get Dresses', dresses)
  socket.on('Current Dresses', data => {
    dresses(data)
  })
}

function subscribeToDress(dress) {
  socket.on('Dress', data => {
    dress(data)
  })
}

function subscribeToRating(rating) {
  socket.on('Rating', data => {
    rating(data)
  })
}

function submitRating(id, rating){
  socket.emit('Submit Rating', [id, rating])
}

function getRating(id) {
  socket.emit('Get Rating', id)
}

function validateCode(valid) {
  socket.on('Verified', data => {
    valid(data)
  })
}

export { getDresses, subscribeToDress, subscribeToRating, submitRating, getRating, validateCode };
