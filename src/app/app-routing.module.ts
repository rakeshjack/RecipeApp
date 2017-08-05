import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { ReceipesComponent } from "./receipes/receipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes=[
        {path: '',redirectTo:'/recipes',pathMatch:'full'},
        {path: 'recipes',component:ReceipesComponent },
        {path: 'shopping-list',component: ShoppingListComponent }
];
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {
 
}