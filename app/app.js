// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const trackEvents = require('./track/events.js')

$(() => {
  // $('#auth').hide()
  // Auth Event listeners
  $('#non-members').on('click', function () {
    $('#sign-up-form').toggle()
    $('#sign-in-form').hide()
  })
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#members').on('click', function () {
    $('#sign-in-form').toggle()
    $('#sign-up-form').hide()
  })
  $('#sign-in-form').on('submit', authEvents.onSignIn)

  $('#sign-out-button').on('click', authEvents.onSignOut)

  $('#change-password-form').on('submit', authEvents.onChangePassword)

  $('#change-password-button').on('click', function () {
    $('#change-password-form').toggle()
  })
  $('#commit-pw-change').on('click', function () {
    // $('#change-password-button').toggle()
    $('#change-password-form').hide()
  })

  // Event listeners for box clicks
  // $('.box').on('click', gameEvents.onClickBox)
  // $('#restart-game-button').on('click', gameEvents.onRestart)
  //
  // mount all of our event handlers to the correct DOM elements when the page
  // has finished loading
  $('#tracks-index-button').on('click', trackEvents.onIndexTracks)
  $('#tracks-show').on('submit', trackEvents.onShowTrack)
  $('#track-show-button').on('click', function () {
    $('#tracks-show').toggle()
  })
  // Destroy a book using a form with a text input for the id
  $('#tracks-destroy').on('submit', trackEvents.onDestroyTrack)
  $('#track-delete-button').on('click', function () {
    $('#tracks-destroy').toggle()
  })

  // Update a book using a form with a text input for the id
  $('#tracks-update').on('submit', trackEvents.onUpdateTrack)
  $('#track-update-button').on('click', function () {
    $('#tracks-update').toggle()
  })

  $('#tracks-create').on('submit', trackEvents.onCreateTrack)
  $('#track-create-button').on('click', function () {
    $('#tracks-create').toggle()
  })

  // our **dynamic** destroy button and update forms will not initially be on the screen,
  // so we need to target their container element `#books-display` and then
  // target our **dynamic** destroy button `.books-destroy-dynamic` and
  // update form ``.books-update-dynamic` inside of the container
  $('#tracks-display').on(
    'click',
    '.track-destroy-dynamic',
    trackEvents.onDynamicDestroyTrack
  )
  $('#tracks-display').on(
    'submit',
    '.track-update-dynamic',
    trackEvents.onDynamicUpdateTrack
  )
})
