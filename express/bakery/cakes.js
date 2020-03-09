// Router for cake related requests
const express = require('express');

// Create the Router
const router = express.Router();

// Pretend database collection
const cakes = [
  {id: 'vanilla', flavor: 'Vanilla'},
  {id: 'ch', flavor: 'Chocolate'}
];

// cs-linuxlab-39.stlawu.edu:3000/cakes
router.get('/', function(request, response) {
  response.send(`
    <h1>Cakes</h1>
    <ul>
      <li><a href="/cakes/vanilla">Vanilla</a></li>
      <li><a href="/cakes/chocolate">Chocolate</a></li>
    </ul>
  `);
});

// cs-linuslab-39.stlawu.edu:3000/cakes/id
router.get('/id', function(request, response) {

  // Pretend database lookup
  const cake = cakes.find(cake => cake.id === request.params.id);

  if (!cake) {
    next();  // Pass on this request
  } else {
    response.render('cakes/detail', {cake: cake});
  }
});

module.exports = router;
