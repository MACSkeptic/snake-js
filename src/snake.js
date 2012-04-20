var Snake = Snake || {};

Snake.snake = function () {
  var api = {}

  

  return api;
};

Snake.position = function (x, y) {
  var api = {};

  api.x = function () { return x; };
  api.y = function () { return y; };

  api.equals = function (otherPosition) {
    return x == otherPosition.x() &&
      y == otherPosition.y();
  };

  return api;
};
