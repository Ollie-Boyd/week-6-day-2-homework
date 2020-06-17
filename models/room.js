const Room = function(area, painted){
    this.area = area;
    this.painted = painted;
};

Room.prototype.paint = function() {
    this.painted = true;
}

module.exports = Room;