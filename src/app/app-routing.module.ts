import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleScreenComponent } from './example-screen/example-screen.component';

const routes: Routes = [
  { path: 'example-screen', component: ExampleScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
