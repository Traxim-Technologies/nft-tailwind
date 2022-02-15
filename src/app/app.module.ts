import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobileWrapperComponent } from './mobile-wrapper/mobile-wrapper.component';
import { ExampleScreenComponent } from './nft-screens/example-screen/example-screen.component';
import { WalletComponent } from './nft-screens/wallet/wallet.component';
import { ProfileComponent } from './nft-screens/profile/profile.component';
import { BestSellerComponent } from './nft-screens/best-seller/best-seller.component';
import { BestSellerSearchComponent } from './nft-screens/best-seller-search/best-seller-search.component';
import { ChooseCollectionComponent } from './nft-screens/choose-collection/choose-collection.component';
import { CreateNewCollectionComponent } from './nft-screens/create-new-collection/create-new-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    MobileWrapperComponent,
    ExampleScreenComponent,
    WalletComponent,
    ProfileComponent,
    BestSellerComponent,
    BestSellerSearchComponent,
    ChooseCollectionComponent,
    CreateNewCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
