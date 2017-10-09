import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import Http Module and Data Service
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule                // <-Add HttpModule import
  ],
  providers: [DataService],   // <-Add DataService provider
  bootstrap: [AppComponent]
})
export class AppModule { }
