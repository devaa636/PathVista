# 🚀 Pathfinding Visualizer (Vanilla JavaScript)

A **fully interactive Pathfinding Algorithm Visualizer** built using **pure HTML, CSS, and JavaScript** (no React, no frameworks, no build tools).

This project visualizes how different graph algorithms explore the grid and find the shortest path between two points.

---

## ✨ Features

- Interactive grid (draw walls using mouse)
- Move Start & End nodes
- Visualize algorithms with animations
- Supports multiple algorithms:
  - BFS (Breadth First Search)
  - DFS (Depth First Search)
  - Dijkstra’s Algorithm
  - A* (A-Star)
- Smooth step-by-step visualization
- Modular & scalable architecture
- Zero dependencies

---

## 📁 Project Structure

pathfinding-visualizer/
│
├── index.html
├── README.md
│
├── css/
│ └── style.css
│
└── js/
├── main.js
├── state.js
├── grid.js
├── ui.js
├── animator.js
└── algorithms/
├── bfs.js
├── dfs.js
├── dijkstra.js
└── astar.js

yaml
Copy code

---

## 🛠️ Installation

No installation required.

Just download or clone the project:

```bash
git clone <www.github.com/devaa636/PathVista>
cd pathfinding-visualizer
▶️ How to Run
Simply open index.html in your browser.

bash
Copy code
Double click index.html
or

bash
Copy code
Right click → Open with Chrome
No server. No npm. No build tools.

🧠 How to Use
Select algorithm from dropdown (BFS / DFS / Dijkstra / A*)

Use buttons:

🧱 Walls → Draw obstacles

🟢 Start → Place start node

🔴 End → Place end node

Click & drag on grid to draw walls

Press ▶ Start

Watch the algorithm explore and build the shortest path

🧩 Algorithms Implemented
1️⃣ BFS (Breadth First Search)
Explores level by level

Guarantees shortest path in unweighted grid

Uses queue

2️⃣ DFS (Depth First Search)
Goes deep before backtracking

Does NOT guarantee shortest path

Uses recursion / stack

3️⃣ Dijkstra
Finds shortest path in weighted/unweighted graph

Uses distance array

Guarantees shortest path

4️⃣ A* (A-Star)
Optimized version of Dijkstra

Uses heuristic (Manhattan distance)

Faster and smarter search