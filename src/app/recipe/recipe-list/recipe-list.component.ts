import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Dummy','http://vignette3.wikia.nocookie.net/scribblenauts/images/7/75/Crash_Test_Dummy_Female.png/revision/latest?cb=20130309213419');

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    console.log("This is a test");
    this.recipeSelected.emit(recipe);
  }

}
