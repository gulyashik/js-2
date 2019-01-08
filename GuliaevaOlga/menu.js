function Menu(type) {
    this.type = type;
    this.name = type.name;
}


Menu.prototype.calculateCalories = function () {
    return this.type.calororific;
};


Menu.prototype.calculatePrice = function () {
    return this.type.price;
};

Menu.prototype.getName = function () {
    return this.name;
};


Menu.prototype.getType = function () {
    return this.type;
};
