# Diagnostic Unit 2.1

### Question 1: What is the Request/Response Cycle?  How does it work?
A way to pass around HTML through other forms of data and handles the exchange of information between the server and the client.

### Question 2: What are the differences between a GET request and a POST request?POST creates
GET is a request for data, POST, posts the data to the page.

### Question 3: What does `npm init` do?
It creates a package.json file that contains information about the package.

### Question 4: What does CRUD stand for?  What are the HTTP verbs that are associated with each function?
CREATE,READ, UPDATE, DELETE.   GET, PUSH, POST, DELETE

### Question 5: If we have a form where we want to create new data, what type of `method` do we use in our form?
PUT

### Question 6: If the following form was submitted, what would `action="myScript.js"` do?
It would create a form on the myScript.js page in the browser.
```
<form method="POST" action="myScript.js?_method=PUT">
  <input type="text" value="name"/>
  <button type="submit">Submit</button>
</form>
```

### Question 7: Write an express route that handles a POST request to the url `/menus` and redirects to the `/homepage`

app.post('/menus', function(req.res) {
  res.redirect('/homepage')
});

### Question 8: In the following express route, write how you would grab the values of `:id` and `:song_id` in javascript.

```
app.get("/artist/:id/song/:song_id"), function(req, res){
  var song = {
    id: req.body.id,
    song_id: req.body.song_id
  };
};
```

### Question 9: What is MVC? How have we been using it so far?
Model view controller, by breaking our app into parts so it can seperate internal information from the information being presented to the user.
## Bonus Question

### Question 10: Write an express route that handles a GET request to the url `/products` and sends back the JSON object {error: "Bad Request"}
