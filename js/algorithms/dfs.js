export function dfs(grid, start, end){
  const visitedOrder = [];
  const visited = new Set();

  function go(node){
    if(!node || node.isWall || visited.has(key(node))) return false;
    visited.add(key(node));
    visitedOrder.push(node);

    if(node === end) return true;

    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    for(const [dr,dc] of dirs){
      const next = grid[node.r+dr]?.[node.c+dc];
      if(next){
        next.prev = node;
        if(go(next)) return true;
      }
    }
    return false;
  }

  go(start);
  return visitedOrder;
}

const key = n => `${n.r},${n.c}`;
