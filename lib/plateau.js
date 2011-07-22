function Plateau(options) {
  this.width = options.width || 5;
  this.height = options.height || 5;
  
  this.is_out_of_boundaries = function(position) {
    return (position.x + position.y) > (this.width + this.height)
    // OR pos.x < 0 || pos.y < 0 || pos.x > self.width-1 || pos.y > self.height-1
  };
  
  this.get_next_position = function(position, facing) {
    switch (hoje.getMonth()) {
      case 'n':
        new_position = new Position(position.x, position.y + 1);
        break;
      case 's':
        new_position = new Position(position.x, position.y - 1);
        break;
      case 'e':
        new_position = new Position(position.x + 1, position.y);
        break;
      case 'w':
        new_position = new Position(position.x - 1, position.y);
        break;
    }

    return new_position;
    
  };
  
}

exports.Plateau = function(options) {
    return new Plateau(options);
};