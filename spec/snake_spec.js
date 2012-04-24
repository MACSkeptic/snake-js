describe('all', function () {
 it('should verify if a condition matches all elements', function () {
   expect([1, 2, 3].all(function (e) { return e < 4; } )).toBeTruthy();
   expect([1, 2, 3].all(function (e) { return e < 3; } )).toBeFalsy();
 });  
});

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

describe('board', function () { 
  it('should verifiy if a position is inside its boundaries', function () {
    var board = Snake.board(10);
    expect(board.contains(Snake.position(0, 0))).toBeTruthy();
    expect(board.contains(Snake.position(9, 9))).toBeTruthy();
    expect(board.contains(Snake.position(10, 9))).toBeFalsy();
    expect(board.contains(Snake.position(9, 10))).toBeFalsy();
    expect(board.contains(Snake.position(-1, 0))).toBeFalsy();
    expect(board.contains(Snake.position(0, -1))).toBeFalsy();
  });

  it('should pick a random spot', function () {
    var board = Snake.board(20);
    var position = board.randomPosition();
    expect(board.contains(position)).toBeTruthy();
  });
});

describe('direction', function () {
  describe('north', function () {
    it('should know the next position', function () {
      expect(Snake.direction.north.next(Snake.position(1, 1))).toEqual(Snake.position(1, 2));
    });
    it('should know the previous position', function () {
      expect(Snake.direction.north.previous(Snake.position(1, 1))).toEqual(Snake.position(1, 0));
    });
    it('should know the direction that is to the left of it', function () {
      expect(Snake.direction.north.left()).toEqual(Snake.direction.west);
    });
    it('should know the direction that is to the right of it', function () {
      expect(Snake.direction.north.right()).toEqual(Snake.direction.east);
    });
  });
  describe('south', function () {
    it('should know the next position', function () {
      expect(Snake.direction.south.next(Snake.position(1, 1))).toEqual(Snake.position(1, 0));
    });
    it('should know the previous position', function () {
      expect(Snake.direction.south.previous(Snake.position(1, 1))).toEqual(Snake.position(1, 2));
    });
    it('should know the direction that is to the left of it', function () {
      expect(Snake.direction.south.left()).toEqual(Snake.direction.east);
    });
    it('should know the direction that is to the right of it', function () {
      expect(Snake.direction.south.right()).toEqual(Snake.direction.west);
    });
  });
  describe('west', function () {
    it('should know the next position', function () {
      expect(Snake.direction.west.next(Snake.position(1, 1))).toEqual(Snake.position(0, 1));
    });
    it('should know the previous position', function () {
      expect(Snake.direction.west.previous(Snake.position(1, 1))).toEqual(Snake.position(2, 1));
    });
    it('should know the direction that is to the left of it', function () {
      expect(Snake.direction.west.left()).toEqual(Snake.direction.south);
    });
    it('should know the direction that is to the right of it', function () {
      expect(Snake.direction.west.right()).toEqual(Snake.direction.north);
    });
  });
  describe('east', function () {
    it('should know the next position', function () {
      expect(Snake.direction.east.next(Snake.position(1, 1))).toEqual(Snake.position(2, 1));
    });
    it('should know the previous position', function () {
      expect(Snake.direction.east.previous(Snake.position(1, 1))).toEqual(Snake.position(0, 1));
    });
    it('should know the direction that is to the left of it', function () {
      expect(Snake.direction.east.left()).toEqual(Snake.direction.north);
    });
    it('should know the direction that is to the right of it', function () {
      expect(Snake.direction.east.right()).toEqual(Snake.direction.south);
    });
  });
});

describe('snake', function () {
  describe('on creation', function () {
    it('should have a list with the positions that are occupied', function () {
      var solid = Snake.snake({ head: Snake.position(1, 6), direction: Snake.direction.north });
      expect(solid.occupiedPositions()).toContain(Snake.position(1, 2));
      expect(solid.occupiedPositions()).toContain(Snake.position(1, 3));
      expect(solid.occupiedPositions()).toContain(Snake.position(1, 4));
      expect(solid.occupiedPositions()).toContain(Snake.position(1, 5));
      expect(solid.occupiedPositions()).toContain(Snake.position(1, 6));
    });
  });

  it('should tell if a position intersects with its occupied positions', function () {
    var solid = Snake.snake({ head: Snake.position(1, 6), direction: Snake.direction.north });
    expect(solid.intersects(Snake.position(1, 2))).toBeTruthy();
    expect(solid.intersects(Snake.position(1, 3))).toBeTruthy();
    expect(solid.intersects(Snake.position(1, 4))).toBeTruthy();
    expect(solid.intersects(Snake.position(1, 5))).toBeTruthy();
    expect(solid.intersects(Snake.position(1, 6))).toBeTruthy();
    expect(solid.intersects(Snake.position(1, 7))).toBeFalsy();
    expect(solid.intersects(Snake.position(1, 1))).toBeFalsy();
  });

  it('should eat and grow', function () {
      var solid = Snake.snake({ head: Snake.position(1, 6), direction: Snake.direction.north });
      solid.eat();
      solid.move();
      expect(solid.occupiedPositions()).toContain(Snake.position(1, 2));
      expect(solid.occupiedPositions()).toContain(Snake.position(1, 3));
      expect(solid.occupiedPositions()).toContain(Snake.position(1, 4));
      expect(solid.occupiedPositions()).toContain(Snake.position(1, 5));
      expect(solid.occupiedPositions()).toContain(Snake.position(1, 6));
      expect(solid.occupiedPositions()).toContain(Snake.position(1, 7));
  });

  it('should move forward', function () {
      var solid = Snake.snake({ head: Snake.position(1, 6), direction: Snake.direction.west });
      solid.move();
      expect(solid.occupiedPositions()).toContain(Snake.position(0, 6));
      expect(solid.occupiedPositions()).toContain(Snake.position(1, 6));
      expect(solid.occupiedPositions()).toContain(Snake.position(2, 6));
      expect(solid.occupiedPositions()).toContain(Snake.position(3, 6));
      expect(solid.occupiedPositions()).toContain(Snake.position(4, 6));
  });

  it('should turn left', function () {
      var solid = Snake.snake({ head: Snake.position(5, 6), direction: Snake.direction.north });
      solid.turnLeft();
      solid.move();
      expect(solid.occupiedPositions()).toContain(Snake.position(5, 3));
      expect(solid.occupiedPositions()).toContain(Snake.position(5, 4));
      expect(solid.occupiedPositions()).toContain(Snake.position(5, 5));
      expect(solid.occupiedPositions()).toContain(Snake.position(5, 6));
      expect(solid.occupiedPositions()).toContain(Snake.position(4, 6));
  });

  it('should turn right', function () {
      var solid = Snake.snake({ head: Snake.position(5, 6), direction: Snake.direction.north });
      solid.turnRight();
      solid.move();
      expect(solid.occupiedPositions()).toContain(Snake.position(5, 3));
      expect(solid.occupiedPositions()).toContain(Snake.position(5, 4));
      expect(solid.occupiedPositions()).toContain(Snake.position(5, 5));
      expect(solid.occupiedPositions()).toContain(Snake.position(5, 6));
      expect(solid.occupiedPositions()).toContain(Snake.position(6, 6));
  });
});

describe('position', function () {
  describe('equality', function () {
    it('should be true if the coordinates are the same', function () {
      var a = Snake.position(1, 2);
      var b = Snake.position(1, 2);
      expect(a).toEqual(b);
    });
    it('should be false if the coordinates are not the same', function () {
      var a = Snake.position(1, 2);
      var b = Snake.position(1, 1);
      expect(a).not.toEqual(b);
    });
    it('should be between other positions if both x and y are between', function () {
      var lower = Snake.position(1, 1);
      var upper = Snake.position(3, 3);
      expect(Snake.position(2, 2).between(lower, upper)).toBeTruthy();
      expect(Snake.position(3, 2).between(lower, upper)).toBeFalsy();
      expect(Snake.position(2, 3).between(lower, upper)).toBeFalsy();
      expect(Snake.position(1, 2).between(lower, upper)).toBeFalsy();
      expect(Snake.position(2, 1).between(lower, upper)).toBeFalsy();
      expect(Snake.position(0, 0).between(lower, upper)).toBeFalsy();
      expect(Snake.position(4, 4).between(lower, upper)).toBeFalsy();
    });
  });
  describe('operations', function () {
    it('should result in a new position when adding a vector to it', function () {
      var a = Snake.position(4, 5);
      var b = a.add(3, -1);

      expect(a.x()).toEqual(4);
      expect(a.y()).toEqual(5);

      expect(b.x()).toEqual(7);
      expect(b.y()).toEqual(4);
    }); 
  });
});
