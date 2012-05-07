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
