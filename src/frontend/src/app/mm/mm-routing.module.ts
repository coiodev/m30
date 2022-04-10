import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MMViewComponent } from './mm-view/mm-view.component';

const routes: Routes = [
  { path: "", component: MMViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MMRoutingModule { }
