var express = require('express'); // Loading express on our server
var app = express(); // install express on our server
var hbs = require('hbs'); // loads handlebars

app.set("view engine", "hbs"); //tells Express what to use for rendering templates


app.get('/', function(req, res) { // when a request comes in at localhost:3000/ it will respond
    res.send('Hello friend!');
});

// app.get('/greeting', function(req, res) { // when a request comes in at localhost:3000/ it will respond
    // res.send('HEY, WDI 9! ${req.params.food}');


app.get('/greeting', function(req, res) {
    console.log(req.query);

    res.render('greeting', {
      data: req.query.saying
    });
});

app.get('/favorite-foods', function(req, res) {
    var favoriteFoods = ["Bredenbecks ice cream", 'Burritos from Machismo', 'A breakfast sandwich Amelies','Pizza from Randazzos in Willow Grove'];

    res.render('favorite-foods', {
        data: favoriteFoods
    });
});
app.use(express.static(__dirname + '/public')); // VERY IMPORTANT!! Make sure to add a '/'
app.get('/rihanna', function(req, res) { // when a request comes in at localhost:3000/ it will respond
    res.send('Work, work, work, work, ${req.params.name}');
});
// app.get('/:name', function(req, res) {
//   console.log(req.params);
//   console.log(req.route);
//   console.log(req.query);// when a request comes in at localhost:3000/ it will respond
//     res.send(`Hello, ${req.params.name}. My name is ${req.query.first_name} ${req.query.last_name}.`);
// });
app.get('/sightings', function(req, res) {
  console.log(req.params);
  console.log(req.route);
  console.log(req.query);// when a request comes in at localhost:3000/ it will respond
    res.send(`How many ufo sightings do you think there are in that ${req.query.state}? ${req.query.sights}.`);
});
app.get('/favorite/:noun', function(req, res){
    console.log(req.params);
    if (req.query[req.params.noun]) {
        res.send(`I have a favorite ${req.params.noun}, it is ${req.query[req.params.noun]}.`);
    }
    else {
        res.send(`I have a favorite ${req.params.noun}!`);
    }
});
// app.get('/:bigfoot', function(req, res) {
//   if (req.query.blurry === "true") {
//     res.send("It's not the photographer's fault. Bigfoot is blurry, and that's extra scary to me. There's a large, out-of-focus monster roaming the countryside. Run! He's fuzzy! Get out of there!");
//   }
//   else {
//     res.send("A group of researchers have amassed evidence that the legendary Bigfoot is real, ABC News reported, with the scientists presenting reams of evidence.");
//   }
//   console.log(req.params);
//   console.log(req.route);
//   console.log(req.query);// when a request comes in at localhost:3000/ it will respond
//   }

// });
// app.get('/:food', function(req, res) { // when a request comes in at localhost:3000/ it will respond
//     res.send(`My favorite ${req.params.food} is, all of them!`);
// });
var port = process.env.PORT || 3000; // tells the server where to listen for requests

app.listen(port, function() {
// tells the server where to listen for requests on port 3000

  console.log('hello-express is listening on port 3000');
}); // actualizing the line above
