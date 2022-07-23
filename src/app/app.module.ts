import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FullStackDevLogs } from './fullstackdevlogs/fullstackdevlogs.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, FullStackDevLogs ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
