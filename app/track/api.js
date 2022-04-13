'use strict'

const store = require('../store.js')
const config = require('../config.js')

const createTrack = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/tracks',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}

const updateTrack = function () {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/tracks/' + store.track._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}

const indexTrack = function (data) {
  return $.ajax({
    method: 'READ',
    url: config.apiUrl + '/index-track',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data
  })
}

const deleteTrack = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
