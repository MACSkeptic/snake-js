var Snake = Snake || {};

Snake.game = function (params) {
  var api = {};
  var food = undefined;
  var over = false;
  var config = (params || {}).defaults({
    snake: Snake.snake(),
    board: Snake.board(30)
  });
  var ui = {
    board: function () { return $('#board') },
    square: function (position) {
      return $('<div></div>').addClass('node').css('bottom', position.y() * 10).css('left', position.x() * 10);
    }
  };

  api.loop = function () {
    if(over) { return; }

    config.snake.move();

    over = !config.board.contains(config.snake.head());

    food = food || config.board.randomPosition();
    if(config.snake.intersects(food)) {
      config.snake.eat();
      food = config.board.randomPosition();
    }
  };

  api.over = function () { return over; };

  api.draw = function () {
    var board = ui.board();
    board.html('');

    if(over) {
      board.addClass('over').html('Game Over');
      return;
    }

    config.snake.occupiedPositions().each(function (occupiedPosition) {
      board.append(ui.square(occupiedPosition));
    });
    board.append(ui.square(food).addClass('food'));
  };

  api.handleInput = function () {
    KeyboardJS.bind.key('a', function () { config.snake.turnLeft();  });
    KeyboardJS.bind.key('d', function () { config.snake.turnRight(); });
  };

  return api;
};
