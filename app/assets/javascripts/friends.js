$(document).on('turbolinks:load', function() {
  $('#friend-lookup-form').on('ajax:complete', function(event, data, status){
    $('#results').html(data.responseText)
  })
})