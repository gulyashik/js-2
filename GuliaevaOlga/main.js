
var olivie = new Salad(Salad.OLIVIE, 350);
var caesar = new Salad(Salad.CAESAR, 200);

var cola = new Drink(Drink.COLA);
var cofee = new Drink(Drink.COFFEE);

var humburgerFirst = new Humburger(Humburger.SIZE_LARGE, Humburger.STUFFING_CHEESE);
var humburgerSecond = new Humburger(Humburger.SIZE_SMALL, Humburger.STUFFING_SALAD);
var humburgerThird = new Humburger(Humburger.SIZE_SMALL, Humburger.STUFFING_SALAD);
var humburgerFourth = new Humburger(Humburger.SIZE_LARGE, Humburger.STUFFING_POTATO);
var humburgerFifth = new Humburger(Humburger.SIZE_SMALL, Humburger.STUFFING_CHEESE);


var orderFirst = new Order(humburgerFirst, olivie, cofee);
orderFirst.getItems();

orderFirst.addToOrder(humburgerFifth);
orderFirst.getItems();
orderFirst.getFinalCalories();
orderFirst.getFinalPrice();

orderFirst.deleteFromOrder(humburgerFirst);
orderFirst.getItems();
orderFirst.getFinalCalories();
orderFirst.getFinalPrice();

orderFirst.addToOrder(caesar);
orderFirst.getItems();
orderFirst.getFinalCalories();
orderFirst.getFinalPrice();
orderFirst.payForTheOrder();
orderFirst.addToOrder(humburgerFourth);

var orderSecond = new Order(humburgerFifth,humburgerSecond,cofee,cola,olivie);
orderSecond.getItems();
orderSecond.getFinalCalories();
orderSecond.getFinalPrice();

orderSecond.deleteFromOrder(olivie);
orderSecond.getItems();

orderSecond.addToOrder(caesar);
orderSecond.getItems();
orderSecond.getFinalCalories();
orderSecond.getFinalPrice();
orderSecond.payForTheOrder();

var orderThird = new Order();
orderThird.getItems();

orderThird.addToOrder(caesar);
orderThird.addToOrder(cofee);
orderThird.addToOrder(humburgerFirst);
orderThird.getItems();
orderThird.getFinalCalories();
orderThird.getFinalPrice();

orderThird.payForTheOrder();