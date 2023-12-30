class Product{
  constructor(name, price){
    this.name = name;
    this.price = price;
  }
  displayProduct(){
    console.log(`Product : ${this.name}`);
    console.log(`Price : ${this.price.toFixed(2)}`)
  }
  calculateTotal(salesTax){
    return this.price + (this.price * salesTax);
  }
}

const salesTax = 0.05;

const product1 = new Product("shirt", 19.99);
const product2 = new Product("pants", 22.50);
const product3 = new Product("underwear", 100.00);
product2.displayProduct();
product1.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`Total price(with tax) : $${total.toFixed(2)}`);

const total2 = product2.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total2.toFixed(2)}`);

const total3 = product3.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total3.toFixed(2)}`)
