import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[]=[new Recipe('A Test Recipe','This is a simple Test','https://get.pxhere.com/photo/plant-fruit-sweet-glass-summer-food-produce-drink-lychee-dessert-cake-cocktail-grapefruit-mojito-jelly-exotic-citrus-verne-flowering-plant-suites-france-confectionery-land-plant-mai-tai-mint-julep-caipirinha-1020887.jpg'),
    new Recipe('Coffe Mug','This is Butter Scotch','https://get.pxhere.com/photo/keyboard-white-tea-morning-glass-cup-green-ceramic-drink-lighting-coffee-cup-bed-3204.jpg')];
  constructor() { }

  ngOnInit() {
  }

}
