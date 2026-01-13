export function dijkstra(grid, start, end){
  const visitedOrder = [];
  const nodes = [];

  for(const row of grid){
    for(const n of row){
      n.dist = Infinity;
      n.prev = null;
      if(!n.isWall) nodes.push(n);
    }
  }

  start.dist = 0;

  while(nodes.length){
    nodes.sort((a,b)=>a.dist-b.dist);
    const node = nodes.shift();
    if(node.dist === Infinity) break;

    visitedOrder.push(node);
    if(node === end) break;

    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    for(const [dr,dc] of dirs){
      const next = grid[node.r+dr]?.[node.c+dc];
      if(!next || next.isWall) continue;

      if(node.dist + 1 < next.dist){
        next.dist = node.dist + 1;
        next.prev = node;
      }
    }
  }
  return visitedOrder;
}
