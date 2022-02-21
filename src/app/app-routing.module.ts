import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleScreenComponent } from './nft-screens/example-screen/example-screen.component';
import { WalletComponent } from './nft-screens/wallet/wallet.component';
import { ProfileComponent } from './nft-screens/profile/profile.component';
import { SearchComponent } from './nft-screens/search/search.component';
import { SearchAllComponent } from './nft-screens/search-all/search-all.component';
import { DiscoveryComponent } from './nft-screens/discovery/discovery.component';
import { CreateCompleteComponent } from './nft-screens/create-complete/create-complete.component';
import { DetailComponent } from './nft-screens/detail/detail.component';

const routes: Routes = [
  { path: 'example-screen', component: ExampleScreenComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search-all', component: SearchAllComponent },
  { path: 'discovery', component: DiscoveryComponent },
  { path: 'create-complete', component: CreateCompleteComponent },
  { path: 'detail', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
