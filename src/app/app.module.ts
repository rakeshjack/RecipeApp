import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReceipesComponent } from './receipes/receipes.component';
import { RecipeListComponent } from './receipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './receipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './receipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from "./app-routing.module";
import { RecipeStartComponent } from './receipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './receipes/recipe-edit/recipe-edit.component';
import { RecipeService } from "./receipes/recipe.service";
import { DataStorageService } from "./shared/data-storage.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService,RecipeService,DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
