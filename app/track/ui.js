'use strict'

const onIndexSuccess = function (responseData) {
  // extract the books from the response's data into a variable
  const tracks = responseData.tracks

  // log the information we get back from the API so we know how we can
  // interact with it.
  console.log(responseData.tracks)

  // create a string that will store the html for all of the books we want to
  // display on the page. Start as an empty string.
  let tracksHtml = ''

  // loop through each book from the API
  tracks.forEach(track => {
    // add (concatenate) the book html for each book, to the booksHtml string
    //
    // when adding the delete button add a data-id attribute, with the id of the
    // button we want to delete
    // add a data-id attribute for our dynamic edit form as well
    tracksHtml += `
      <h4>Date: ${track.date}</h4>
      <p>Activity: ${track.activity}</p>
      <p>Location: ${track.location}</p>
      <p>Distance: ${track.distance}</p>
      <p>Duration: ${track.duration}</p>
      <p>With: ${track.with}</p>
      <p>Comments: ${track.comments}</p>
      <p>ID: ${track._id}</p>
      <form class="track-update-dynamic" data-id=${track._id}>
        <input type="text" name="track[date]" placeholder="Date" required>
        <input type="text" name="track[activity]" placeholder="Activity Type" required>
        <input type="text" name="track[location]" placeholder="Location" required>
        <input type="text" name="track[distance]" placeholder="Distance" required>
        <input type="text" name="track[duration]" placeholder="Duration" required>
        <input type="text" name="track[with]" placeholder="With friends?" required>
        <input type="text" name="track[comments]" placeholder="Notes" required>
        <button type="submit">Update Track</button>
      </form>
      <button class='track-destroy-dynamic' data-id=${track._id}>Delete Track</button>
      <br>
    `
  })
  console.log(tracksHtml)
  // set the html for all of our books all at once
  $('#track-display').html(tracksHtml)
}

const onShowSuccess = function (responseData) {
  // log the information we get back from the API so we know how we can
  // interact with it.
  console.log(responseData)

  // build HTML element with data for one book
  const trackHtml = `
    <h4>Date: ${responseData.track.date}</h4>
    <p>Activity: ${responseData.track.activity}</p>
    <p>Location: ${responseData.track.location}</p>
    <p>Distance: ${responseData.track.distance}</p>
    <p>Duration: ${responseData.track.duration}</p>
    <p>With: ${responseData.track.with}</p>
    <p>Comments: ${responseData.track.comments}</p>
  `

  // replace whatever was in the books-display element with our bookHtml
  $('#track-display').html(trackHtml)

  // reset all forms
  $('form').trigger('reset')
}

const onDestroySuccess = function () {
  // add success message to our books-destroy-message element
  $('#tracks-destroy-message').html('Track successfully deleted!')

  // empty out the books-display element in case it was displaying information
  // about the book we just deleted, replace with a message for the user to get
  // all the books again.
  $('#track-display')
    .html(
      'Tracks have changed! Click "Get All Tracks" again to see all the tracks'
    )
    .fadeOut(4500)

  // add class for success messaging
  $('#tracks-destroy-message').addClass('success').fadeOut(4500)

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#tracks-destroy-message').html('')
    $('#tracks-destroy-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

const onUpdateSuccess = function (responseData) {
  // add success message to our books-update-message element
  $('#tracks-update-message')
    .html('You successfully updated the track')
    .fadeOut(4500)

  // empty out the books-display element in case it was displaying information
  // about the book we just updated, replace with a message for the user to get
  // all the books again.
  $('#track-display')
    .html(
      'Tracks have changed! Click "Get All Tracks" again to see all the tracks.'
    )
    .fadeOut(4500)

  // add class for success messaging
  $('#tracks-update-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#tracks-update-message').html('')
    $('#tracks-update-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

const onCreateSuccess = function () {
  // add success message to content
  $('#tracks-create-message').html('You created a new track!').fadeOut(4500)

  // we just created a new book!
  // we can add a message to let the users know they should request all of
  // the books again to see the newly created book included
  $('#track-display')
    .html(
      'Tracks have changed! Click "Get All Tracks" again to see all the tracks.'
    )
    .fadeOut(4500)

  // add class for success messaging
  $('#tracks-create-message').addClass('success')

  // use setTimeout to allow the success message to stay for 5 seconds before
  // the message is replaced with '' and the 'success' class is removed
  setTimeout(() => {
    $('#tracks-create-message').html('')
    $('#tracks-create-message').removeClass('success')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

const onError = function (err) {
  // log the error for debugging purposes
  console.error(err)

  // display a message to the user to let them know what they were doing did
  // not work correctly
  $('#error-message').html('Something went wrong, please try again.')

  // add class for error messaging
  $('#error-message').addClass('failure')

  // use setTimeout to allow the error message to stay for 5 seconds before
  // the message is replaced with '' and the 'failure' class is removed
  setTimeout(() => {
    $('#error-message').html('')
    $('#error-message').removeClass('failure')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

module.exports = {
  onIndexSuccess,
  onShowSuccess,
  onDestroySuccess,
  onUpdateSuccess,
  onCreateSuccess,
  onError
}
