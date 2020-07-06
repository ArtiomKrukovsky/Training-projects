import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavigationComponent } from './app.navigation/app.navigation.component';
import { CorouselItemComponent } from './corousel-item/corousel-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CorouselItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
