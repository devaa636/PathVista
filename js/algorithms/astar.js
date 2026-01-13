function h(a,b){
  return Math.abs(a.r-b.r) + Math.abs(a.c-b.c);
}

export function astar(grid, start, end){
  const open = [start];
  const visitedOrder = [];

  start.g = 0;
  start.f = h(start,end);

  while(open.length){
    open.sort((a,b)=>a.f-b.f);
    const node = open.shift();
    visitedOrder.push(node);

    if(node === end) break;

    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    for(const [dr,dc] of dirs){
      const next = grid[node.r+dr]?.[node.c+dc];
      if(!next || next.isWall) continue;

      const g = node.g + 1;
      if(next.g === undefined || g < next.g){
        next.g = g;
        next.f = g + h(next,end);
        next.prev = node;
        if(!open.includes(next)) open.push(next);
      }
    }
  }
  return visitedOrder;
}
