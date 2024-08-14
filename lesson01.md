## Agent
An agent is an entity that perceives its environment and acts upon that environment.
## State
A state is a configuration of the agent and its environment
## Initial state
This is the state in which the agent begins
## Action
These are choices that can be made in a state
##  Actions 
Actions(s) returns the set of actions that can be executed in a state S

- The programme needs an encoding of the actions, states and their relationship. These leads to
## Transition model
This is a description of what state results from performing any applicable action in any stat.
- RESULT(s,a) returns the state resulting from performing action a in state s.\
## State space
This is the set of all states reachable from the initial state by any sequence of actions
## Goal test
This is a way to determine whether a given state is a goal test.
## Path cost
Numerical cost associated with a given path
## Search problem
- Initial state
- Actions
- Transition model
- Goal test
- Path cost function
## Optimal solution
This is the solution that has the lowest path cost among all solutions.
## Node
A node is a data structure that keeps track of:
- a state
- a parent (node that generated this node)
- an action (action applied to parent to get this node)
- a path cost (from initial state to node)
## Approach
- start with a frontier that contains the initial state
- repeat
    - if the frontier is empty, then no solution
    - remove a node from the frontier
    - if node contains goal stat, return the solution
    - expand node, add resulting nodes to the frontier

## Revised approach
- start with a frontier that contains the initial state
- start with an empty explored set
- repeat
    - if the frontier is empty, then no solution
    - remove a node from the frontier
    - if node contains goal stat, return the solution
    - add the node to the explored set
    - expand node, add resulting nodes to the frontier if they aren't already in the frontier or in the explore set.

### How do we remove a node from the frontier? In the depth-first search
we use stack data type
### stack is, LIFO: 
last in, first out

# search approaches
## Depth-first search
This is a search approach that searches algorithm that always expands the deepest node in the frontier.
## breadth-first search
This is a search approach that searches algorithm that always expands the shallowest node in the frontier.

### How do we remove a node from the frontier? In the breadth-first search
we use queue data type
### queue is, FIFO: 
first in, first out
