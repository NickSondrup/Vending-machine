export default class Snack {
    constructor (name, price) {
       this.name = name
       this.price = price
    }

    get shopTemplate() {

        return /*html*/`
        <div class="card p-2">
            ${this.name}
            ${this.price}
            <button class ="btn-dark" onclick="app.vendingController.addToCart('${this.name}')">add to cart</button>
        </div>
        `
    }

    get cartTemplate(){
     return /*html*/ `
        <div class ="card p-2">
            <span> ${this.name} </span>
            <span> ${this.price} </span>
        </div>
        `   
    }
}
