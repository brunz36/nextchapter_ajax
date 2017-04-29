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

  $('.page').on('click', function(event) {
    let queryValue = $('innerText').val()

    console.log(queryValue)
    //
    // $.ajax({
    //   url: '/homes',
    //   data: { query: queryValue },
    //   dataType: 'script'
    // })
  })
})
