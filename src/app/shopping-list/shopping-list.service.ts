import { Injectable } from '@angular/core';

import { Ingredient } from './../shared'

@Injectable()
export class ShoppingListService {
  items: Ingredient[] = [];

  constructor() {}

  getItems() {
    return this.items;
  }

  addItems(item: Ingredient[]) {
    Array.prototype.push.apply(this.items, item);
  }
}
