var Snake = Snake || {};

Snake.direction = (function () {
  var api = {};

  api.east = (function () { 
    return { 
      next: function (position) { return position.add(1, 0); },
      left: function () { return Snake.direction.north },
      right: function () { return Snake.direction.south }
    }; 
  }());
  api.west = (function () { 
    return { 
      next: function (position) { return position.add(-1, 0); },
      left: function () { return Snake.direction.south },
      right: function () { return Snake.direction.north }
    }; 
  }());
  api.south = (function () { 
    return { 
      next: function (position) { return position.add(0, -1); },
      left: function () { return Snake.direction.east },
      right: function () { return Snake.direction.west }
    }; 
  }());
  api.north = (function () { 
    return { 
      next: function (position) { return position.add(0, 1); },
      left: function () { return Snake.direction.west },
      right: function () { return Snake.direction.east }
    }; 
  }());

  return api;
}());

Snake.snake = function () {
  var api = {};
  var size = 5;
  var direction = Snake.direction.east;
  var head = Snake.position(4, 0);
  
  api.occupiedPositions = function () {
    return [
      Snake.position(0, 0),
      Snake.position(1, 0),
      Snake.position(2, 0),
      Snake.position(3, 0),
      Snake.position(4, 0)
    ];
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
