var express = require('express'); // Loading express on our server
var app = express(); // install express on our server
var hbs = require('hbs'); // loads handlebars
app.set("view engine", "hbs"); //tells Express what to use for rendering templates


app.use(express.static(__dirname + '/public')); // VERY IMPORTANT!! Make sure to add a '/'
app.get('/shows', function(req, res) {
    var favoriteShows = ["NHL tonight", 'Walking-Dead', 'Shameless','Dexter'];

    res.render('shows', {
    data: favoriteShows
    });
});










var port = process.env.PORT || 3000; // tells the server where to listen for requests

app.listen(port, function() {
// tells the server where to listen for requests on port 3000

  console.log('favorite-shows is listening on port 3000');
}); // actualizing the line above
