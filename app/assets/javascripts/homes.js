// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function() {
  $('#query').on('input', _.debounce(function(event) {
    let queryValue = $(this).val()

    $.ajax({
      url: '/homes',
      data: { query: queryValue },
      dataType: 'script'
    })
  }, 400))

  // THERE REALLY SHOULD BE A BETTER WAY WITH TOGGLE!!!
  $('.home-list').on('click', '.sq-feet', function(event){
    let sqFeet = $(this).data("sq_feet")
    let sqMeters = (sqFeet * 0.0929).toFixed(1)

    $(this).replaceWith(`<h4 class="sq-meter" data-sq_meters="${sqMeters}">Square Meters: ${sqMeters}</h4>`)
  })

  $('.home-list').on('click', '.sq-meter', function(event){
    let sqMeters = $(this).data("sq_meters")
    let sqFeet = (sqMeters * 10.7639104167).toFixed()

    $(this).replaceWith(`<h4 class="sq-feet" data-sq_feet="${sqFeet}">Square Feet: ${sqFeet}</h4>`)
  })
  // TOO MUCH CODE

  $('.page a').on('click', function(event) {
    let pageNumber = $(this).text()
    event.preventDefault()

    $.ajax({
      url: '/homes',
      data: { page: pageNumber },
      dataType: 'script'
    })
  })
})
