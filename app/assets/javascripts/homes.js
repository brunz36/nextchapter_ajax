// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function() {
  $('#query').on('input', function(event) {
    let queryValue = $(this).val()

    $.ajax({
      url: '/homes',
      data: { query: queryValue },
      dataType: 'script'
    })
  })

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

  $('.pagination').on('click', '.page', function(event) {
    // let queryValue = $(this).data(`BaseURI`)
    var baseUrl = document.location.target;

    console.log(baseUrl)
    //
    // $.ajax({
    //   url: '/homes',
    //   data: { query: queryValue },
    //   dataType: 'script'
    // })
  })
})
