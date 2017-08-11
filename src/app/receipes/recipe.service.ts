import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is a simple Test',
            'https://get.pxhere.com/photo/plant-fruit-sweet-glass-summer-food-produce-drink-lychee-dessert-cake-cocktail-grapefruit-mojito-jelly-exotic-citrus-verne-flowering-plant-suites-france-confectionery-land-plant-mai-tai-mint-julep-caipirinha-1020887.jpg',
            [
                new Ingredient('Vodka', 1),
                new Ingredient('Lemon Chopped', 20)
            ]),
        new Recipe('Coffe Mug', 'This is Butter Scotch', 'https://get.pxhere.com/photo/keyboard-white-tea-morning-glass-cup-green-ceramic-drink-lighting-coffee-cup-bed-3204.jpg',
            [
                new Ingredient('Milk', 1),
                new Ingredient('Hot Water', 20)
            ])];
    constructor(private slService: ShoppingListService) {

    }
    setRecipes(recipes: Recipe[]){
        this.recipes=recipes;
        this.recipesChanged.next(this.recipes.slice());
    }    
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    updateRecipe(index:number,newRecipe:Recipe) {
        this.recipes[index]=newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number) {
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
