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
