import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingredient } from './../shared';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel',
    'Very tasty',
    'http://2.bp.blogspot.com/_1zm5C_394Xs/TBb5qYtMN1I/AAAAAAAAAGc/w9pBu--gpnQ/s1600/Vienna+19.JPG',
    [
     new Ingredient('French Fries', 2),
     new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  ];

  constructor() { }
  getRecipe() {
    return this.recipes;
  }
}
