var Snake = Snake || {};

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
