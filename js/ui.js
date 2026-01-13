import { state } from "./state.js";
import { clearGrid } from "./grid.js";
import { runAlgorithm } from "./main.js";

export function initUI(){
  document.body.onmousedown = ()=> state.mouseDown = true;
  document.body.onmouseup = ()=> state.mouseDown = false;

  document.getElementById("startBtn").onclick = runAlgorithm;
  document.getElementById("clearBtn").onclick = clearGrid;

  document.getElementById("wallBtn").onclick = ()=>setMode("wall");
  document.getElementById("startNodeBtn").onclick = ()=>setMode("start");
  document.getElementById("endNodeBtn").onclick = ()=>setMode("end");

  document.getElementById("algoSelect").onchange = (e)=>{
    state.algorithm = e.target.value;
  };
}

function setMode(m){
  state.mode = m;
  document.getElementById("modeText").innerText = "Mode: " + m.toUpperCase();
}
