import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {TodosComponent} from './pages/todos/todos.component';
import {TestComponent} from './pages/test/test.component';

const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'todos',component:TodosComponent},
    {path:'test/:id',component:TestComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })

  export class AppRoutingModule {}