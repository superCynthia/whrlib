import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from "ng2-material";
import { AppComponent }   from './app.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }