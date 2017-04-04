$(function() {
  ////recognizing click event
  $('.get-gif').on('click', function () {
    /////get random img from url (AJAX) from giphy API
    $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')
      .done(function(data) {
        console.log(data);
        $('.image-jumbotron').attr('src', data.data.img_url)
      });
      .fail(function (data) {
        console.log(data.data.errorMessage);
      });
  })
})
