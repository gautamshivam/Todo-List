import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { TodoListComponent }from './todo-list.component';
@NgModule({
  imports:      [ BrowserModule , FormsModule ],
  declarations: [ AppComponent ,TodoListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
