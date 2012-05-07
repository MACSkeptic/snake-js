describe('game', function () {
  describe('loop', function () {
    it('should move the snake', function () {
      var solid = Snake.snake();
      var game = Snake.game({snake: solid});

      spyOn(solid, 'move');

      game.loop();

      expect(solid.move).toHaveBeenCalled();
    });
    it('should eat if intercepts food', function () {
      var board = Snake.board(50);
      var solid = Snake.snake();
      var game = Snake.game({board: board, snake: solid});
      var food = Snake.position(3, 3);

      spyOn(board, 'randomPosition').andReturn(food);
      spyOn(solid, 'intersects').andReturn(true);
      spyOn(solid, 'eat');

      game.loop();

      expect(solid.eat).toHaveBeenCalled();
    });
  });
  it('should be over if the snake hits the walls', function () {
      var board = Snake.board(50);
      var solid = Snake.snake();
      var game = Snake.game({board: board, snake: solid});

      spyOn(board, 'contains').andReturn(false);

      game.loop();

      expect(board.contains).toHaveBeenCalledWith(solid.head());
      
      expect(game.over()).toBeTruthy();
  });
});
