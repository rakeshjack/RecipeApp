import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceipesComponent } from "./receipes/receipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./receipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./receipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./receipes/recipe-edit/recipe-edit.component";


const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: ReceipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent }

        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}