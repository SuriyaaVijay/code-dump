from src.maze import Maze
from src.solver import solve_maze
from src.image_generator import generate_image
import time

IMGNAME = "solved_maze.png"
ALGORITHM = "ASTAR"
FILENAME = "./mazes/tiny.txt"

if __name__ == "__main__":
    maze = Maze(FILENAME)
    
    print("Empty Maze:")
    maze.print_maze()
    start_time = time.time()  # Start the timer
    solve_maze(maze, ALGORITHM)
    end_time = time.time()  # End the timer
    if maze.solution:
        print("Solved Maze:")
        maze.print_maze()
        print("Solution steps:", maze.solution[0])
        print("Number of explored states:", len(maze.explored))
        print("Time taken: {:.4f} seconds".format(end_time - start_time))  # Print the elapsed time
        generate_image(maze, IMGNAME)
    else:
        print("No solution found for the maze.")
