var Snake = Snake || {};

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
  config = (params || {}).defaults({
    size: 5,
    direction: Snake.direction.east,
    head: Snake.position(4, 0)
  });

  var api = {};
  
  api.move = function () {
    config.head = config.direction.next(config.head);
  };

  api.occupiedPositions = function () {
    var positions = [];
    config.size.times(function (many) {
      var position = config.head;
      many.times(function () { position = config.direction.previous(position); });
      positions.push(position);
    });
    return positions;
  };

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

  api.toString = function () {
    return '# Position: (' + x + ', ' + y + ') #';
  };

  api.add = function (dx, dy) {
    return Snake.position(x + dx, y + dy);
  };

  return api;
};
