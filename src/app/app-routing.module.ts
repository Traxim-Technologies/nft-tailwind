import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileWrapperComponent } from './mobile-wrapper/mobile-wrapper.component';

const routes: Routes = [
  { path: 'wrapper', component: MobileWrapperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
