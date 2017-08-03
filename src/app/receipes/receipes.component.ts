import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css']
})
export class ReceipesComponent implements OnInit {
    selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
