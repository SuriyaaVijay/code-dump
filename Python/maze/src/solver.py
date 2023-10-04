from src.node import Node
from src.algorithms import GuidedBFSFrontier, StackFrontier, QueueFrontier, AStarFrontier, RngFrontier

def solve_maze(maze, algorithm):
    start_node = Node(state=maze.start, parent=None, action=None, path_cost=0)
    
    if algorithm == "DFS":
        frontier = StackFrontier()
    elif algorithm == "BFS":
        frontier = QueueFrontier()
    elif algorithm == "GBFS":
        frontier = GuidedBFSFrontier(maze.goal)
    elif algorithm == "ASTAR":
        frontier = AStarFrontier(maze.goal)
    elif algorithm == "RNG":
        frontier = RngFrontier()
    
    frontier.add(start_node)
    maze.explored = set()

    while True:
        if frontier.empty():
            raise Exception("No solution")
        
        node = frontier.remove()

        if node.state == maze.goal:
            actions = []
            cells = []
            while node.parent is not None:
                actions.append(node.action)
                cells.append(node.state)
                node = node.parent
            actions.reverse()
            cells.reverse()
            maze.solution = (actions, cells)
            return

        maze.explored.add(node.state)

        for action, state in maze.neighbors(node.state):
            if not frontier.contains_state(state) and state not in maze.explored:
                child = Node(state=state, parent=node, action=action, path_cost=node.path_cost + 1)
                frontier.add(child)
