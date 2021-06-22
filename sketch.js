var grid = createGrid();
var w = 40;
var neighbourCount = make2DArray();

function setup() {
  frameRate(5);
  createCanvas(800,789);
  background(51);
  grid = makeCells(grid, 75,100);
}

function draw() {
  background(255, 255, 255);
  Count();
  for (var i = 0; i < 15; i ++){
    for (var j = 0; j < 15; j ++){
      grid[i][j].show();
      if (grid[i][j].deadness != -1){
        if (neighbourCount[i][j] >= 0 && neighbourCount[i][j] <=3){
          grid[i][j].deadness = 0;
        }
        if (neighbourCount[i][j] >= 4 && neighbourCount[i][j] <=6){
          grid[i][j].deadness = 1;
        }
        if (neighbourCount[i][j] >=7){
          grid[i][j].deadness = -1;
        }
      }
      
    } 
  }
  
  
  
}

function Count(){
  for (var i = 1; i < 14; i ++){
    for (var j = 1; j < 14; j ++){
      neighbourCount[i][j] = grid[i-1][j-1].deadness + grid[i][j-1].deadness + grid[i+1][j-1].deadness + grid[i-1][j].deadness + grid[i+1][j].deadness + grid[i-1][j+1].deadness + grid[i][j+1].deadness + grid[i+1][j+1].deadness;
      
    }
  }
  
   neighbourCount[0][0] = grid[0][1].deadness + grid[1][0].deadness + grid[1][1].deadness;
   neighbourCount[14][14] = grid[13][14].deadness + grid[14][13].deadness + grid[13][13].deadness;
   neighbourCount[14][0] = grid[14][1].deadness + grid[13][0].deadness + grid[13][1].deadness;
   neighbourCount[0][14] = grid[1][14].deadness + grid[0][13].deadness + grid[1][13].deadness;
   
   for (var i = 1; i < 14; i ++){
     neighbourCount[i][0] = grid[i-1][0].deadness + grid[i+1][0].deadness + grid[i-1][1].deadness + grid[i][1].deadness + grid[i+1][1].deadness;
   }
   for (var i = 1; i < 14; i ++){
     neighbourCount[0][i] = grid[0][i-1].deadness + grid[0][i+1].deadness + grid[1][i-1].deadness + grid[1][i].deadness + grid[1][i+1].deadness;
   }
   for (var i = 1; i < 14; i ++){
     neighbourCount[i][14] = grid[i-1][14].deadness + grid[i+1][14].deadness + grid[i-1][13].deadness + grid[i][13].deadness + grid[i+1][13].deadness;
   }
   for (var i = 1; i < 14; i ++){
     neighbourCount[14][i] = grid[14][i-1].deadness + grid[14][i+1].deadness + grid[13][i-1].deadness + grid[13][i].deadness + grid[13][i+1].deadness;
   }
  console.log(neighbourCount);
  
}

function createGrid(){
  grid = make2DArray();
  return grid;
}

function make2DArray(){
  var array = new Array(15);
  for (var i = 0; i < 15; i++){
    array[i] = new Array(15);
  }
  return array;
}

function makeCells(grid, offx, offy){
  
  for (var i = 0; i < 15; i ++){
    for (var j = 0; j < 15; j ++){
      grid[i][j] = new Cell(w * i + offx, w * j + offy, w, int(random(2)));
    } 
  }
  
  return grid;
}


function Cell(x, y, w, deadness){
  this.x = x;
  this.y = y;
  this.w = w;
  this.deadness = deadness;
}

Cell.prototype.show = function(){
    //noFill();
    stroke('black');
    rect(this.x, this.y, this.w, this.w);
    textSize(15);

    if (this.deadness == 0){
      fill('green');
    }
    if (this.deadness == 1){
      fill('yellow');
    }
    if (this.deadness == -1){
      fill('red');
    }
    rect(this.x,this.y,this.w,this.w);
}

