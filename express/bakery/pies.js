// Router for cake related requests
const express = require('express');

// Create the Router
const router = express.Router();

// Pretend database collection
const cakes = [
  {id: 'apple', flavor: 'Apple'},
  {id: 'cherry', flavor: 'Cherry'}
];

// cs-linuxlab-39.stlawu.edu:3000/pies/
router.get('/', function(request, response) {
  response.render('pies/index', {pies: pies});
});

// cs-linuslab-39.stlawu.edu:3000/pies/id
router.get('/:id', function(request, response, next) {

  // Pretend database lookup
  const pie = pies.find(pie => pie.id === request.params.id);

  if (!pie) {
    next(); // Pass on this request
  } else {
    response.render('pies/detail', {pie: pie});
  }
});
module.exports = router;
