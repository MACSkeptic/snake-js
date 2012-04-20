describe('all', function () {
 it('should verify if a condition matches all elements', function () {
   expect([1, 2, 3].all(function (e) { return e < 4; } )).toBeTruthy();
   expect([1, 2, 3].all(function (e) { return e < 3; } )).toBeFalsy();
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
});
