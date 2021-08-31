import { ProxyState } from "../AppState.js";
import Snack from "../Models/Snack.js";
import { valuesService } from "../Services/ValuesService.js";


//Private
function _drawShop() {
  let template = ''
  ProxyState.snacks.forEach(snack => {template += snack.shopTemplate})
  document.getElementById('shop').innerHTML = template
}

function _drawCart(){
  let template = ''
  ProxyState.cart.forEach(item => {template += item.cartTemplate})
  document.getElementById('cart').innerHTML = template
}

function _drawTotal(){
  let template = ""
  template += /*html*/ `
  <div> ${valuesService.totalCart()} </div>
  `
  document.getElementById('total').innerHTML = template
}

//Public
export class VendingController{
  constructor(){
    _drawShop()
    _drawCart()
    _drawTotal()
    ProxyState.on('cart', _drawCart)
    ProxyState.on('cart', _drawTotal)
  }
  
  addToCart(name){valuesService.addToCart(name)}
  
}