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
