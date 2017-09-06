import {canvas, ctx} from './map/mapConfig';
import {drawGrid} from './map/drawGrid';
import {addNeighbours, createNodes} from './map/createMap';
import {showObstacles} from './map/mapUtils';

let gridSize = 20;

drawGrid(gridSize);
let map = createNodes(gridSize);
addNeighbours(map, gridSize);
showObstacles(map, gridSize);
console.log(map);

canvas.addEventListener('click', (e) => {
  console.error('Click');
  let x = e.offsetX; // get X
  let y = e.offsetY; // get Y
  console.log('Position x', e.offsetX); // get X
  console.log('Position y', e.offsetY); // get Y
  for(let grid of map) {
    let bottomRightX = grid.x + gridSize;
    let bottomRightY = grid.y + gridSize;
    if(x >= grid.x && x < bottomRightX && y >= grid.y && y < bottomRightY) {
      ctx.fillStyle = 'green';
      ctx.fillRect(grid.x, grid.y, gridSize , gridSize);
      console.log('grid', grid, 'was clicked');
    }
  }
});

// set onClickListener for right mouse event
canvas.addEventListener('contextmenu', (e) => {
  console.error('Right Mouse Click');
  e.preventDefault();
  let x = e.offsetX; // get X
  let y = e.offsetY; // get Y

  for(let grid of map) {
    let bottomRightX = grid.x + gridSize;
    let bottomRightY = grid.y + gridSize;
    if(x >= grid.x && x < bottomRightX && y >= grid.y && y < bottomRightY) {
      ctx.fillStyle = 'red';
      ctx.fillRect(grid.x, grid.y, gridSize, gridSize);
      console.log('grid', grid, 'was clicked');
    }
  }
});
