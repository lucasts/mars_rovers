function Position(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}

exports.Position = function(x, y) {
    return new Position(x, y);
};