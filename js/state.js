export const ROWS = 22;
export const COLS = 45;

export const state = {
  grid: [],
  mouseDown: false,
  mode: "wall",
  isRunning: false,
  speed: 12,
  algorithm: "bfs",
  startNode: { r: 10, c: 5 },
  endNode: { r: 10, c: 35 }
};
