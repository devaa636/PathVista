import { createGrid } from "./grid.js";
import { initUI } from "./ui.js";
import { state } from "./state.js";
import { animateVisited, animatePath } from "./animator.js";

import { bfs } from "./algorithms/bfs.js";
import { dfs } from "./algorithms/dfs.js";
import { dijkstra } from "./algorithms/dijkstra.js";
import { astar } from "./algorithms/astar.js";

const algorithms = { bfs, dfs, dijkstra, astar };

createGrid();
initUI();

export async function runAlgorithm(){
  if(state.isRunning) return;
  state.isRunning = true;

  const grid = state.grid;
  const start = grid[state.startNode.r][state.startNode.c];
  const end = grid[state.endNode.r][state.endNode.c];

  // Reset visuals
  for(const row of grid){
    for(const n of row){
      n.prev = null;
      n.element.classList.remove("visited","path");
    }
  }

  const visitedOrder = algorithms[state.algorithm](grid, start, end);

  await animateVisited(visitedOrder);
  await animatePath(end);

  state.isRunning = false;
}
