function Humburger(size, stuffing) {
    Menu.call(this, size);
    this.stuffing = stuffing;
}

Humburger.prototype = Object.create(Menu.prototype);
Humburger.prototype.constructor = Humburger;

Humburger.SIZE_SMALL = {
    name: 'Cheeseburger',
    price: 50,
    calororific: 20
};
Humburger.SIZE_LARGE = {
    name: 'BigMak',
    price: 100,
    calororific: 40
};
Humburger.STUFFING_CHEESE = {
    name: 'cheese',
    price: 10,
    calororific: 20
};
Humburger.STUFFING_SALAD = {
    name: 'salad',
    price: 20,
    calororific: 5
};
Humburger.STUFFING_POTATO = {
    name: 'potato',
    price: 15,
    calororific: 10
};

Humburger.prototype.getSize = function () {
    return this.type;
};

Humburger.prototype.getStuffing = function () {
    return this.stuffing;
};

Humburger.prototype.calculatePrice = function () {
    return this.getSize().price + this.getStuffing().price;
};

Humburger.prototype.calculateCalories = function () {
    return this.getSize().calororific + this.getStuffing().calororific;
};