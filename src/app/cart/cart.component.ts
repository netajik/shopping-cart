import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

import { CartService } from "../cart.service";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent {
  items;
  checkoutForm;
  constructor(
    private cartService: CartService,
    private fromBuilder: FormBuilder
  ) {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.fromBuilder.group({
      name: "",
      address: ""
    });
  }

  onSubmit(customerData) {
    //save the checkout date here......
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    window.alert("Your order has been submitted");
  }
}
