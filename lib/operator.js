function Operator(plateau, rover) {
  this.plateau = plateau;
  this.rover = rover;
  
  this.send_command = function(command) {
    return position > (this.width + this.height)  
  };
}

exports.Plateau = function(options) {
    return new Plateau(options);
};

class NasaOperator
  attr_accessor :plateau
  @plateau
  
  def initialize(operator_plateau)
    @plateu = operator_plateau
  end
  
  def send_move_command(rover, command)
    raise 'Undefinied rover command' unless RoverRobot.avaliable_commands.include?(command)
  end
  
end