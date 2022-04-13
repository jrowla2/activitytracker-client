'use strict'


const onSignUpSuccess = function () {
  $('#auth-display').html('<p>User signed up successfully</p>')

  $('form').trigger('reset')
}

module.exports = {
  onClickBox,
  onSignUpSuccess
}
