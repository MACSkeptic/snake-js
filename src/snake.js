var Snake = Snake || {};

Snake.game = function (params) {
  var api = {};
  var config = (params || {}).defaults({
    snake: Snake.snake(),
    board: Snake.board(10)
  });

  api.loop = function () {
    config.snake.move();
  };

  return api;
};

Snake.board = function (size) {
  var api = {};

  api.contains = function (position) { return position.between(Snake.position(-1, -1), Snake.position(size, size)); };

  return api;
};

Snake.direction = (function () {
  var api = {};

  api.east = (function () { 
    return { 
      next: function (position) { return position.add(1, 0); },
      previous: function (position) { return position.add(-1, 0); },
      left: function () { return Snake.direction.north },
      right: function () { return Snake.direction.south }
    }; 
  }());

  api.west = (function () { 
    return { 
      next: function (position) { return position.add(-1, 0); },
      previous: function (position) { return position.add(1, 0); },
      left: function () { return Snake.direction.south },
      right: function () { return Snake.direction.north }
    }; 
  }());

  api.south = (function () { 
    return { 
      next: function (position) { return position.add(0, -1); },
      previous: function (position) { return position.add(0, 1); },
      left: function () { return Snake.direction.east },
      right: function () { return Snake.direction.west }
    }; 
  }());

  api.north = (function () { 
    return { 
      next: function (position) { return position.add(0, 1); },
      previous: function (position) { return position.add(0, -1); },
      left: function () { return Snake.direction.west },
      right: function () { return Snake.direction.east }
    }; 
  }());

  return api;
}());

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

Snake.position = function (x, y) {
  var api = {};

  api.x = function () { return x; };
  api.y = function () { return y; };

  api.equals = function (otherPosition) { return x == otherPosition.x() && y == otherPosition.y(); };
  api.toString = function () { return '# Position: (' + x + ', ' + y + ') #'; };

  api.between = function (lower, upper) { return lower.x() < x && lower.y() < y && upper.x() > x && upper.y() > y; };

  api.add = function (dx, dy) { return Snake.position(x + dx, y + dy); };

  return api;
};
