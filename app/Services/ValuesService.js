import { ProxyState } from "../AppState.js";
import  Snack  from "../Models/Snack.js";

class ValuesService {
  addToCart(item){
    // use find method

    let foundItem = ProxyState.snacks.find(s => s.name == item)
    ProxyState.cart.push(foundItem)
    console.log('hello from service', ProxyState.cart)
    ProxyState.cart = ProxyState.cart
    console.log(ProxyState.cart)
  }

  totalCart(){
    let total = 0
    for (let i = 0; i < ProxyState.cart.length; i++) {
      let item = ProxyState.cart[i].price;
      total += item 
    }
    return total 
  }
}


export const valuesService = new ValuesService();

