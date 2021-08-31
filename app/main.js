import { VendingController } from "./Controllers/VendingController.js";


class app {
  vendingController = new VendingController();
}

window['app']= new app()