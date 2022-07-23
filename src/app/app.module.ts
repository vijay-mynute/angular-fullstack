import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FullstackdevlogsComponent } from './fullstackdevlogs/fullstackdevlogs.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, FullstackdevlogsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
