import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { ToDoTableComponent } from './templates/to-do-table/to-do-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
