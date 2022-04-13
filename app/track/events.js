'use strict'

const store = require('../store.js')
const trackApi = require('../track/api.js')

const onClickBox = function (event) {
  console.log(event.target.id + ' button clicked')
  // update track API
  trackApi.updateTrack(some function entered above)
  if (turn === 'x') {
    turn = 'o'
  } else { turn = 'x' }
}

module.exports = {
  onClickBox,
  onRestart
}