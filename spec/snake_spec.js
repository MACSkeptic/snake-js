describe('all', function () {
 it('should verify if a condition matches all elements', function () {
   expect([1, 2, 3].all(function (e) { return e < 4; } )).toBeTruthy();
   expect([1, 2, 3].all(function (e) { return e < 3; } )).toBeFalsy();
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
  it('should have a list with the positions that are occupied', function () {
    var solid = Snake.snake({ head: Snake.position(1, 6), direction: Snake.direction.north });
    expect(solid.occupiedPositions()).toContain(Snake.position(1, 2));
    expect(solid.occupiedPositions()).toContain(Snake.position(1, 3));
    expect(solid.occupiedPositions()).toContain(Snake.position(1, 4));
    expect(solid.occupiedPositions()).toContain(Snake.position(1, 5));
    expect(solid.occupiedPositions()).toContain(Snake.position(1, 6));
  });

  it('should move forward', function () {
  });

  it('should turn left', function () {
  });

  it('should turn right', function () {
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
