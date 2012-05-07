var Snake = Snake || {};

Snake.board = function (size) {
  var api = {};

  function random() {
    return Math.floor(Math.random() * size); 
  }

  api.contains = function (position) { return position.between(Snake.position(-1, -1), Snake.position(size, size)); };
  api.randomPosition = function () { return Snake.position(random(), random()); };

  return api;
};
