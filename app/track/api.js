'use strict'

const config = require('./../config')
const store = require('./../store')

// make GET request to /books to get all books
// getting all of a resource is commonly called an index or list action
const index = function () {
  return $.ajax({
    url: config.apiUrl + '/tracks',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// make GET request to /books/:id to get a single book
// getting a single resource is commonly called a show or retrieve action
const show = function (id) {
  return $.ajax({
    url: config.apiUrl + '/tracks/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// make DELETE request to /books/:id to delete a single book
// deleting a single resource is commonly called a destroy action
const destroy = function (id) {
  return $.ajax({
    url: config.apiUrl + '/tracks/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const update = function (id, formData) {
  return $.ajax({
    url: config.apiUrl + '/tracks/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    // include the book data that we will use to update the book
    data: formData
  })
}

const create = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/tracks',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    // include the book data that we will use to create the book
    data: formData
  })
}

module.exports = {
  index,
  show,
  destroy,
  update,
  create
}
