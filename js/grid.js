import { state, ROWS, COLS } from "./state.js";

const gridElement = document.getElementById("grid");
gridElement.style.gridTemplateColumns = `repeat(${COLS}, 25px)`;

export function createGrid() {
  state.grid = [];
  gridElement.innerHTML = "";

  for (let r = 0; r < ROWS; r++) {
    const row = [];
    for (let c = 0; c < COLS; c++) {
      const div = document.createElement("div");
      div.className = "node";

      if (r === state.startNode.r && c === state.startNode.c) div.classList.add("start");
      if (r === state.endNode.r && c === state.endNode.c) div.classList.add("end");

      div.addEventListener("mousedown", () => handleCell(r, c));
      div.addEventListener("mouseenter", () => {
        if (state.mouseDown) handleCell(r, c);
      });

      gridElement.appendChild(div);

      row.push({
        r, c,
        isWall: false,
        prev: null,
        dist: Infinity,
        element: div
      });
    }
    state.grid.push(row);
  }
}

function handleCell(r, c) {
  if (state.isRunning) return;

  const node = state.grid[r][c];

  if (state.mode === "wall") {
    if (isStartOrEnd(r,c)) return;
    node.isWall = !node.isWall;
    node.element.classList.toggle("wall");
  }

  if (state.mode === "start") setStart(r,c);
  if (state.mode === "end") setEnd(r,c);
}

function isStartOrEnd(r,c){
  return (r===state.startNode.r && c===state.startNode.c) ||
         (r===state.endNode.r && c===state.endNode.c);
}

function setStart(r,c){
  document.querySelector(".start")?.classList.remove("start");
  state.startNode = {r,c};
  state.grid[r][c].element.classList.add("start");
}

function setEnd(r,c){
  document.querySelector(".end")?.classList.remove("end");
  state.endNode = {r,c};
  state.grid[r][c].element.classList.add("end");
}

export function clearGrid(){
  createGrid();
}
