# Mars Rovers Navigation

*At the end of second objetive I will reveal where this idea come from, if no one discover it first*

## Objetives

This will be just a fun time for me to play with some new techies like node, socket and so on.
To do that, I have plan to:

1. Make a simple versiom just a plate, a rover and move it based on STDIN/FILE
2. Refactor a bit for make it draw what's happening
3. Make it playable in the web, in a simple way
4. A more interactive version(canvas, keyboard control, sounds)
5. Some sort of multiplayer(1vs1 challenges)
6. ??

Maybe the game itself will be a bit boring, but wait, do it will be fun. I guess.

## Brief, Historical Info

A squad of robotic rovers are to be landed by NASA on a plateau on Mars. This plateau, which is curiously rectangular, 
must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send 
back to Earth.

A rover's position and location is represented by a combination of x and y co-ordinates and a letter representing one of
the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might 
be 0, 0, N, which means the rover is in the bottom left corner and facing North.

In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R'
makes the rover spin 90 degrees left or right respectively, without moving from its current spot. 'M' means move forward 
one grid point, and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y+1).

## INPUT:

The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.

The rest of the input is information pertaining to the rovers that have been deployed. Each rover has two lines of input.
The first line gives the rover's position, and the second line is a series of instructions telling the rover how to explore
the plateau.

The position is made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and 
the rover's orientation.

Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has 
finished moving.

  
    (x,y)(4x4)  1,2 directly North will be 1,3
                  N
      +-----+-----+-----+-----+
      | 0,3 | 1,3 | 2,3 | 3,3 |
      +-----+-----+-----+-----+
      | 0,2 | 1,2 | 2,2 | 3,2 |
    W +-----+-----+-----+-----+  E
      | 0,1 | 1,1 | 2,1 | 3,1 |
      +-----+-----+-----+-----+
      | 0,0 | 1,1 | 2,2 | 3,0 |
      +-----+-----+-----+-----+
                  S

## OUTPUT

The output for each rover should be its final co-ordinates and heading. 

## INPUT AND OUTPUT

### Test Input:
5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM

### Expected Output:
1 3 N
5 1 E



## Roles, Entities, some ref for later.

Main roles:
- Nasa Operator
  - send moves to rover
  - ask rover position
- Rover Robot
  - moves itself
  - know it's position in the current grid

primary elements
- Plateau Grid
  - rovers table
  - know is possible positions and corners
  - know where a rover is 

auxiliaries elements 
- Position
  - a data object, related to a given plateau


Walkthrough  Test input:
1. Load a 5x5 plateau
2. Load the first rover, put it on 1,2 facing North
3. Make moves

notes:
 - a rover just receive commands, and execute them
 - hove move itself, when receive a operator command
