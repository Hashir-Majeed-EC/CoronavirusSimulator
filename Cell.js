
function Cell(x, y, w){
  this.x = x;
  this.y = y;
  this.w = w;
}

Cell.prototype.show = function(){
    //noFill();
    stroke('black');
    rect(this.x, this.y, this.w, this.w);
    textSize(15);
    stroke('red');
    text("Camel", this.x + this.w/2, this.y + this.w/2);

}
  
