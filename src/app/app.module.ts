import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { ToDoTableComponent } from './templates/to-do-table/to-do-table.component';
import { TodosComponent } from './pages/todos/todos.component';
import { HomeComponent } from './pages/home/home.component';

import {AppRoutingModule} from './app-routing.module';
import { TestComponent } from './pages/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoTableComponent,
    TodosComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
