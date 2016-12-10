import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';
import { RecipeService } from './../recipe.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  // recipe = new Recipe('Dummy', 'Dummy','http://vignette3.wikia.nocookie.net/scribblenauts/images/7/75/Crash_Test_Dummy_Female.png/revision/latest?cb=20130309213419');

  constructor(private recipeService: RecipeService ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
