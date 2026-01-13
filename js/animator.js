import { state } from "./state.js";

export async function animateVisited(list){
  for(const node of list){
    if(isStartOrEnd(node)) continue;
    node.element.classList.add("visited");
    await sleep(state.speed);
  }
}

export async function animatePath(endNode){
  let node = endNode.prev;
  while(node && !isStart(node)){
    node.element.classList.add("path");
    node = node.prev;
    await sleep(30);
  }
}

function isStart(node){
  return node.r===state.startNode.r && node.c===state.startNode.c;
}

function isStartOrEnd(node){
  return isStart(node) || (node.r===state.endNode.r && node.c===state.endNode.c);
}

function sleep(ms){
  return new Promise(r=>setTimeout(r,ms));
}
