import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from '../receipes/recipe.service';
@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css'],
  providers: [RecipeService],
})
export class ReceipesComponent implements OnInit {
    selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
      this.recipeService.recipeSelected
      .subscribe((recipe: Recipe) =>{
          this.selectedRecipe=recipe;
      });
  }

}
