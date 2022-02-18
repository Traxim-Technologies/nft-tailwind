import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileWrapperComponent } from './mobile-wrapper/mobile-wrapper.component';
import { ExampleScreenComponent } from './nft-screens/example-screen/example-screen.component';
import { WalletComponent } from './nft-screens/wallet/wallet.component';
import { ProfileComponent } from './nft-screens/profile/profile.component';
import { SearchComponent } from './nft-screens/search/search.component';
import { SearchAllComponent } from './nft-screens/search-all/search-all.component';
import { DiscoveryComponent } from './nft-screens/discovery/discovery.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileWrapperComponent,
    ExampleScreenComponent,
    WalletComponent,
    ProfileComponent,
    SearchComponent,
    SearchAllComponent,
    DiscoveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
