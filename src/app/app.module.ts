import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// App Module
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';



@NgModule({
  imports: [
    BrowserModule,
    AppComponent,
    RouterModule,
    HeaderComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
