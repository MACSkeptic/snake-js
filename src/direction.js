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
