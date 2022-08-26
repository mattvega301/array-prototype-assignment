Array.prototype.myMap = function(mapFunct, arguments){
    let res = [];

    for (let i = 0; i < this.length; i++){
        res.push(mapFunct.apply(arguments, [this[i], i, this]));
    }
    return res;
}

Array.prototype.myReduce = function (reducFunct, val) {
    let res = val;
    if (val) {
        if (this.length === 0)
            return res;
        for (let i = 0; i < this.length; i++) {
            res = reducFunct(res, this[i]);
        }
    } else {
        if (this.length === 0)
            throw new TypeError('Reduce of empty array with no initial value');
        else if (this.length === 1)
            return this[0];
        else {
            res = this[0];
            for (let i = 1; i < this.length; i++) {
                res = reducFunct(res, this[i]);
            }
        }
    }
    return res;
}

