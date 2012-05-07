var Snake = Snake || {};

Snake.snake = function (params) {
  var config = (params || {}).defaults({
    size: 5,
    direction: Snake.direction.east,
    head: Snake.position(4, 0)
  });

  var api = {};
  var positions = [];

  (function initialize () {
    config.size.times(function (many) {
      var position = config.head;
      many.times(function () { position = config.direction.previous(position); });
      positions.push(position);
    });
  }());

  api.eat = function () { positions.push(positions.last()); };
  api.head = function () { return positions.first(); };
  
  api.move = function () { 
    config.head = config.direction.next(config.head);
    positions.unshift(config.head);
    positions.pop();
  };

  api.turnLeft = function () { config.direction = config.direction.left(); };
  api.turnRight = function () { config.direction = config.direction.right(); };

  api.occupiedPositions = function () { return positions; };

  api.intersects = function (position) { 
    return api.occupiedPositions().any(function (occupied) {
      return occupied.equals(position);
    });
  };

  return api;
};
