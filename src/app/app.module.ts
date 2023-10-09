import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MenuitemComponent } from './menu/menuitem/menuitem.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuitemComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
