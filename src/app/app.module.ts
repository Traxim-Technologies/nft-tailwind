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
import { CreateAnNftComponent } from './nft-screens/create-an-nft/create-an-nft.component';
import { CreateAnNftOneComponent } from './nft-screens/create-an-nft-one/create-an-nft-one.component';
import { CreateAnNftTwoComponent } from './nft-screens/create-an-nft-two/create-an-nft-two.component';
import { CreateAnNftThreeComponent } from './nft-screens/create-an-nft-three/create-an-nft-three.component';
import { GalleryComponent } from './nft-screens/gallery/gallery.component';
import { ProfileFollowingComponent } from './nft-screens/profile-following/profile-following.component';

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
    CreateNewCollectionComponent,
    CreateAnNftComponent,
    CreateAnNftOneComponent,
    CreateAnNftTwoComponent,
    CreateAnNftThreeComponent,
    GalleryComponent,
    ProfileFollowingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
