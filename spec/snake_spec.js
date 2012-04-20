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
