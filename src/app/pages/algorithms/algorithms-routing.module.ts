import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgorithmsPageComponent } from './containers/algorithms-page/algorithms-page.component';


const routes: Routes = [
  {path: '', component: AlgorithmsPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlgorithmsRoutingModule {
}
