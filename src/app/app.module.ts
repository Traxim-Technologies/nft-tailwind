import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileWrapperComponent } from './mobile-wrapper/mobile-wrapper.component';
import { ExampleScreenComponent } from './nft-screens/example-screen/example-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileWrapperComponent,
    ExampleScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
