function Order() {
    this.items = [].slice.call(arguments);
    this.isPaid = false;
}

Order.prototype.addToOrder = function (meal) {
    if (this.isPaid==false) {
        this.items.push(meal);
        console.log('Meal added!');
    } else {
        console.log('You cant add meel: Your order has been paid');
    }
};

Order.prototype.deleteFromOrder = function (meal) {
    if (this.isPaid==false) {
        if (this.items.indexOf(meal) !== -1) {
            this.items.splice(this.items.indexOf(meal), 1);
            console.log('Meal deleted');
        } else {
            console.log('You havent got this meal');
        }
    } else {
        console.log('You cant add meel: Your order has been paid');
    }
};

Order.prototype.getFinalPrice = function () {
    var price = 0;
    if (!this.items.length) {
        console.log('Your order is empty! ');
    } else {
        this.items.forEach(function (item) {
            price += item.calculatePrice();
        });
    }
    console.log('Final price: ' + price + ' tugrik');
    return price;
};

Order.prototype.getItems = function () {
    console.log(this.items);
    return this.items;
};


Order.prototype.payForTheOrder = function () {
    this.isPaid = true;
    console.log('Order is paid!');
};



Order.prototype.getFinalCalories = function () {
    var calories = 0;
    if (!this.items.length) {
        console.log('Your order is empty!');
    } else {
        this.items.forEach(function (item) {
            calories =calories+ item.calculateCalories();
        });
    }
    console.log('Final calories: ' + calories + ' calories');
    return calories;
};
Order.prototype.Paid = function () {
    return this.isPaid;
};
