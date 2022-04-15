// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const trackEvents = require('./track/events.js')

$(() => {
  // $('#auth').hide()
  $('#non-member').on('click', function() {
    $('#sign-up-form').toggle()
    $('#sign-in-form').hide()
  })
  // Auth Event listeners
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('click', authEvents.onSignOut)
  // Event listeners for box clicks
  // $('.box').on('click', gameEvents.onClickBox)
  // $('#restart-game-button').on('click', gameEvents.onRestart)
  //
  // mount all of our event handlers to the correct DOM elements when the page
  // has finished loading
  $('#tracks-index').on('click', trackEvents.onIndexTracks)
  $('#tracks-show').on('submit', trackEvents.onShowTrack)
  // Destroy a book using a form with a text input for the id
  $('#tracks-destroy').on('submit', trackEvents.onDestroyTrack)
  // Update a book using a form with a text input for the id
  $('#tracks-update').on('submit', trackEvents.onUpdateTrack)
  $('#tracks-create').on('submit', trackEvents.onCreateTrack)

  // our **dynamic** destroy button and update forms will not initially be on the screen,
  // so we need to target their container element `#books-display` and then
  // target our **dynamic** destroy button `.books-destroy-dynamic` and
  // update form ``.books-update-dynamic` inside of the container
  $('#tracks-display').on(
    'click',
    '.tracks-destroy-dynamic',
    trackEvents.onDynamicDestroyTrack
  )
  $('#tracks-display').on(
    'submit',
    '.tracks-update-dynamic',
    trackEvents.onDynamicUpdateTrack
  )
})
