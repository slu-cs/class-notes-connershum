// Router for cake related requests
const express = require('express');

// Create the Router
const router = express.Router();

// cs-linuxlab-39.stlawu.edu:3000/pies/
router.get('/', function(request, response) {
  response.send(`
    <h1>Pies</h1>
    <ul>
      <li><a href="/cakes/apple">Apple</a></li>
      <li><a href="/cakes/cherry">Cherry</a></li>
    </ul>
  `);
});

// cs-linuslab-39.stlawu.edu:3000/pies/id
router.get('/id', function(request, response) {
  if (request.params.id === 'apple') {
    response.send('Apple Pies');
  } else if (request.params.id === 'cherry') {
    response.send('Cherry Pies');
  } else {
    next();  // Pass on this request
  }
});

module.exports = router;
