'use strict'

// const { onRestart } = require('../track/events.js')
const store = require('../store.js')

const onSignUpSuccess = function () {
  $('#auth-display')
    .html('<p>User signed up successfully</p>')
    .show()

  $('form').trigger('reset')
  $('#sign-up-form').hide()
  $('#non-members').hide()
}

const onSignUpFailure = function () {
  $('#auth-display').html('<p>Error while signing up</p>')
}

const onSignInSuccess = function (response) {
  $('#auth-display')
    .html('<p>User signed in successfully</p>')
    .show()
    .fadeOut(4500)

  // reset all forms
  $('form').trigger('reset')

  // console.log(response)
  // store data from the response in my store object
  store.user = response.user
  $('#sign-in-form').hide()
  $('#members').hide()
  $('#non-members').hide()
  $('#dashboard').show()
  $('#sign-out-button').show()
  $('#buttons').show()
}

const onSignInFailure = () => {
  $('#auth-display').html('<p>Error while signing in</p>')
}

const onChangePasswordSuccess = function () {
  $('#auth-display')
    .html('<p>User changed password successfully</p>')
    .show()
    .fadeOut(4500)

  $('form').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#auth-display').html('<p>Error while changing password</p>')
}

const onSignOutSuccess = function () {
  $('#auth-display')
    .html('<p>User signed out successfully</p>')
    .show()
    .fadeOut(4500)

  $('form').trigger('reset')
  // these functions are hiding the game and showing the log in
  $('#dashboard').hide()
  $('#start').show()
  $('#members').show()
  $('#non-members').show()
}

const onSignOutFailure = function () {
  $('#auth-display').html('<p>Error while signing out</p>')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
