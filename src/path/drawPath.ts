import {
  canvas,
  ctx,
  WIDTH,
  HEIGHT,
  gridSize,
} from '../map/mapConfig';

import {map} from '../map/createMap';

export const drawPath = (path:any[]) => {
  for(let step of path) {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(step.x, step.y, gridSize, gridSize);
  }
}

export let getNodeFromMap = (x:number, y:number) => {
  let node:any;
  for(let grid of map) {
    let bottomRightX = grid.x + gridSize;
    let bottomRightY = grid.y + gridSize;
    if(x >= grid.x && x < bottomRightX && y >= grid.y && y < bottomRightY) {
      node = grid;
    }
  }
  return node;
}
