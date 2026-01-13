export function bfs(grid, start, end){
  const visitedOrder = [];
  const q = [start];
  const visited = new Set([key(start)]);

  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

  while(q.length){
    const node = q.shift();
    visitedOrder.push(node);

    if(node === end) break;

    for(const [dr,dc] of dirs){
      const nr = node.r+dr, nc = node.c+dc;
      if(!grid[nr]?.[nc]) continue;
      const next = grid[nr][nc];
      if(next.isWall || visited.has(key(next))) continue;

      visited.add(key(next));
      next.prev = node;
      q.push(next);
    }
  }
  return visitedOrder;
}

const key = n => `${n.r},${n.c}`;
