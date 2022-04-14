// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
const trackEvents = require('./track/events.js')

$(() => {
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
  $('#books-index').on('click', trackEvents.onIndexBooks)
  $('#books-show').on('submit', trackEvents.onShowBook)
  // Destroy a book using a form with a text input for the id
  $('#books-destroy').on('submit', trackEvents.onDestroyBook)
  // Update a book using a form with a text input for the id
  $('#books-update').on('submit', trackEvents.onUpdateBook)
  $('#books-create').on('submit', trackEvents.onCreateBook)

  // our **dynamic** destroy button and update forms will not initially be on the screen,
  // so we need to target their container element `#books-display` and then
  // target our **dynamic** destroy button `.books-destroy-dynamic` and
  // update form ``.books-update-dynamic` inside of the container
  $('#books-display').on(
    'click',
    '.books-destroy-dynamic',
    trackEvents.onDynamicDestroyBook
  )
  $('#books-display').on(
    'submit',
    '.books-update-dynamic',
    trackEvents.onDynamicUpdateBook
  )
})
