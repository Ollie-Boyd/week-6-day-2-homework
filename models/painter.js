const Painter = function(){
    this.paintStock = [];
};

Painter.prototype.addPaint = function(paintCan){
    this.paintStock.push(paintCan)    
};

Painter.prototype.totalVolume = function(){
    const arrOfVolumes = this.paintStock.map(can=>can.volume);
    const sum = arrOfVolumes.reduce((total, amount) => total + amount); 
    return sum
};

Painter.prototype.enoughPaint = function(room){
    return room<=this.totalVolume()
};

module.exports = Painter;