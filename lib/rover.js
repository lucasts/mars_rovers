function Rover(name, position, facing) {
  this.name = name || 'RoverRobot0';
  this.position = position|| new Position();
  this.facing = facing || 'S'
}

exports.Rover = function(name, position, facing) {
    return new Rover(name, position, facing);
};
