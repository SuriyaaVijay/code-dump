import heapq
import random

class StackFrontier():
    def __init__(self):
        self.frontier = []

    def add(self, node):
        self.frontier.append(node)

    def contains_state(self, state):
        return any(node.state == state for node in self.frontier)

    def empty(self):
        return len(self.frontier) == 0

    def remove(self):
        if self.empty():
            raise Exception("Empty frontier")
        else:
            node = self.frontier.pop()
            return node

class QueueFrontier(StackFrontier):
    def remove(self):
        if self.empty():
            raise Exception("Empty frontier")
        else:
            node = self.frontier.pop(0)
            return node
        
class RngFrontier(StackFrontier):
    def remove(self):
        if self.empty():
            raise Exception("Empty frontier")
        else:
            node = self.frontier.pop(random.randint(0,len(self.frontier) - 1))
            return node

class GuidedBFSFrontier():
    class PriorityNode:
        def __init__(self, node, priority):
            self.node = node
            self.priority = priority
        
        def __lt__(self, other):
            return self.priority < other.priority
    
    def __init__(self, goal):
        self.frontier = []
        self.goal = goal
        self.explored_states = set()
    
    def add(self, node):
        state = node.state
        priority = self.calculate_priority(state)
        priority_node = self.PriorityNode(node, priority)
        heapq.heappush(self.frontier, priority_node)
        self.explored_states.add(state)
    
    def remove(self):
        if self.empty():
            raise Exception("Empty frontier")
        else:
            priority_node = heapq.heappop(self.frontier)
            return priority_node.node
    
    def empty(self):
        return len(self.frontier) == 0
    
    def contains_state(self, state):
        return state in self.explored_states
    
    def calculate_priority(self, state):
        return abs(state[0] - self.goal[0]) + abs(state[1] - self.goal[1])
    
class AStarFrontier():
    class PriorityNode:
        def __init__(self, node, priority):
            self.node = node
            self.priority = priority

        def __lt__(self, other):
            return self.priority < other.priority

    def __init__(self, goal):
        self.frontier = []
        self.goal = goal
        self.explored_states = set()

    def add(self, node):
        state = node.state
        priority = self.calculate_priority(node)
        priority_node = self.PriorityNode(node, priority)
        heapq.heappush(self.frontier, priority_node)
        self.explored_states.add(state)

    def remove(self):
        if self.empty():
            raise Exception("Empty frontier")
        else:
            priority_node = heapq.heappop(self.frontier)
            return priority_node.node

    def empty(self):
        return len(self.frontier) == 0

    def contains_state(self, state):
        return state in self.explored_states

    def calculate_priority(self, node):
        return node.path_cost + self.heuristic(node.state)

    def heuristic(self, state):
        return abs(state[0] - self.goal[0]) + abs(state[1] - self.goal[1])