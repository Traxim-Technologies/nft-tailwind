import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleScreenComponent } from './nft-screens/example-screen/example-screen.component';
import { WalletComponent } from './nft-screens/wallet/wallet.component';
import { ProfileComponent } from './nft-screens/profile/profile.component';
import { BestSellerComponent } from './nft-screens/best-seller/best-seller.component';
import { BestSellerSearchComponent } from './nft-screens/best-seller-search/best-seller-search.component';
import { ChooseCollectionComponent } from './nft-screens/choose-collection/choose-collection.component';
import { CreateNewCollectionComponent } from './nft-screens/create-new-collection/create-new-collection.component';

const routes: Routes = [
  { path: 'example-screen', component: ExampleScreenComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'best-seller', component: BestSellerComponent },
  { path: 'best-seller-search', component: BestSellerSearchComponent },
  { path: 'choose-collection', component: ChooseCollectionComponent },
  { path: 'create-new-collection', component: CreateNewCollectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
