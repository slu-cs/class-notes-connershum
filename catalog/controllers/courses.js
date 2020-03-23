module.exports.index = function(request, response) {
  response.send('GET /courses');
};

module.exports.retrieve = function(request, response) {
  response.send(`GET /courses/${request.params.id}`);
};
