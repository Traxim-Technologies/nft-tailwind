import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { ProfileFollowersComponent } from './nft-screens/profile-followers/profile-followers.component';
import { PlaceABidComponent } from './nft-screens/place-a-bid/place-a-bid.component';
import { CameraComponent } from './nft-screens/camera/camera.component';
import { HomeNftComponent } from './nft-screens/home-nft/home-nft.component';
import { DetailAccComponent } from './nft-screens/detail-acc/detail-acc.component';
import { ProfileHomeComponent } from './nft-screens/profile-home/profile-home.component';
import { SearchArtworkComponent } from './nft-screens/search-artwork/search-artwork.component';
import { HomeScrollComponent } from './nft-screens/home-scroll/home-scroll.component';
import { NotificationComponent } from './nft-screens/notification/notification.component';
import { SearchComponent } from './nft-screens/search/search.component';
import { SearchAllComponent } from './nft-screens/search-all/search-all.component';
import { DiscoveryComponent } from './nft-screens/discovery/discovery.component';
import { CreateCompleteComponent } from './nft-screens/create-complete/create-complete.component';
import { DetailComponent } from './nft-screens/detail/detail.component';
import { DiscoveryLikeComponent } from './nft-screens/discovery-like/discovery-like.component';
import { DiscoveryActionComponent } from './nft-screens/discovery-action/discovery-action.component';
import { NotificationFilterComponent } from './nft-screens/notification-filter/notification-filter.component';

const routes: Routes = [
  { path: 'example-screen', component: ExampleScreenComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'best-seller', component: BestSellerComponent },
  { path: 'best-seller-search', component: BestSellerSearchComponent },
  { path: 'choose-collection', component: ChooseCollectionComponent },
  { path: 'create-new-collection', component: CreateNewCollectionComponent },
  { path: 'home-nft', component: HomeNftComponent },
  { path: 'create-an-nft', component: CreateAnNftComponent },
  { path: 'create-an-nft-one', component: CreateAnNftOneComponent },
  { path: 'create-an-nft-two', component: CreateAnNftTwoComponent },
  { path: 'create-an-nft-three', component: CreateAnNftThreeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'profile-following', component: ProfileFollowingComponent },
  { path: 'profile-followers', component: ProfileFollowersComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'place-a-bid', component: PlaceABidComponent },
  { path: 'camera', component: CameraComponent },
  { path: 'detail-acc', component: DetailAccComponent },
  { path: 'profile-home', component: ProfileHomeComponent },
  { path: 'search-artwork', component: SearchArtworkComponent },
  { path: 'home-scroll', component: HomeScrollComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search-all', component: SearchAllComponent },
  { path: 'discovery', component: DiscoveryComponent },
  { path: 'create-complete', component: CreateCompleteComponent },
  { path: 'discovery-like' , component: DiscoveryLikeComponent},
  { path: 'discovery-action' , component: DiscoveryActionComponent},
  { path: 'notification-filter' , component: NotificationFilterComponent},
];

export function getRoutes(){
  return routes;
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
