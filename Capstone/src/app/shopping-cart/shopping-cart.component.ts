import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  baked: { id: number, name: string, price: number, unit: number }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.baked = this.getCartItems();
  }

  getCartItems() {
    return [
      { id: 1, name: 'Bread', price: 3.50, unit: 2 },
      { id: 2, name: 'Cookies', price: 1.20, unit: 5 }
    ];
  }

  removeItem(item: { id: number, name: string, price: number, unit: number }) {
    this.baked = this.baked.filter(i => i.id !== item.id);
  }

  getTotal() {
    return this.baked.reduce((sum, item) => sum + item.unit * item.price, 0);
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }
}

