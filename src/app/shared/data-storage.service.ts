import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { RecipeService } from "../receipes/recipe.service";
import { Recipe } from "../receipes/recipe.model";
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    // Only returns Observable only use in header components.
    return this.http.put('https://recipe-book-86aee.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get('https://recipe-book-86aee.firebaseio.com/recipes.json')
      .map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
      )
      .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
      );
  }

}
