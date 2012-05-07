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
