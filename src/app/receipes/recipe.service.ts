import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[]=[new Recipe('A Test Recipe','This is a simple Test','https://get.pxhere.com/photo/plant-fruit-sweet-glass-summer-food-produce-drink-lychee-dessert-cake-cocktail-grapefruit-mojito-jelly-exotic-citrus-verne-flowering-plant-suites-france-confectionery-land-plant-mai-tai-mint-julep-caipirinha-1020887.jpg'),
    new Recipe('Coffe Mug','This is Butter Scotch','https://get.pxhere.com/photo/keyboard-white-tea-morning-glass-cup-green-ceramic-drink-lighting-coffee-cup-bed-3204.jpg')];
    
    getRecipes() {
        return this.recipes.slice();
    }
}