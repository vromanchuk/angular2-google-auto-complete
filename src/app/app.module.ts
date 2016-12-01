import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AutoCompleteModule } from "./auto-complete/auto-complete.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AutoCompleteModule.setProjectAPI("key")
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
