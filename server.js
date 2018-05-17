const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const drinkDatabase = [
  {
    id: '1',
    name: 'Coffee',
    price: '$5'
  },
  {
    id: '2',
    name: 'Coke',
    price: '$1'
  }
];

// Middlewares
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

// Home Page
app.get('/', (req, res) => {
  res.render('index');
});

// List all the drinks
app.get('/drinks', (req, res) => {
  res.render('drinks/index', { drinks: drinkDatabase });
});

// Display the create drink form
app.get('/drinks/new', (req, res) => {
  res.render('drinks/new');
});

app.post('/drinks', (req, res) => {
  // 1. Get data from the request
  let newDrink = req.body;

  // 2. Add the new drink to the database
  drinkDatabase.push(newDrink);

  // 3. Render the newly updated list

  // Redirect does 3 things
  // 1. Set the response status to 300 level
  // 2. Set the response location header to the redirect path
  // 3. Send the response
  res.redirect('/drinks');
});

app.get('/drinks/:id/edit', (req, res) => {
  // 1. Find the target drink
  let targetDrink = drinkDatabase.find(function(drink) {
    return drink.id == req.params.id;
  });

  console.log(targetDrink);
  // 2. Render it onto the template
  res.render('drinks/edit', { drink: targetDrink });
});

app.post('/drinks/:id', (req, res) => {
  // 1. Find the target drink
  let targetDrink = drinkDatabase.find(function(drink) {
    return drink.id == req.params.id;
  });

  // 2. Update it according the req.body
  targetDrink.name = req.body.name;
  targetDrink.price = req.body.price;

  // 3. Redirect
  res.redirect('/drinks');
});

app.post('/drinks/:id/delete', (req, res) => {
  // 1. Find the target drink
  let targetDrink = drinkDatabase.find(function(drink) {
    return drink.id == req.params.id;
  });

  // 2. Delete the drink from the database
  let targetIndex = drinkDatabase.indexOf(targetDrink);
  drinkDatabase.splice(targetIndex, 1);

  // 3. Redirect
  res.redirect('/drinks');
});

// Start the server
const PORT = 3000;
app.listen(PORT, function() {
  console.log(`app listening on port ${PORT}!`);
});
