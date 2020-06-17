const Paint = function(volume){
    this.volume = volume;
};

Paint.prototype.isEmpty = function(){
    return this.volume===0
}

Paint.prototype.empty = function() {
    this.volume = 0;
}

module.exports = Paint;