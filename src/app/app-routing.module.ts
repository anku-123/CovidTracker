import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistrictViewComponent } from './component/district-view/district-view.component';
import { StateViewComponent } from './component/state-view/state-view.component';


const routes: Routes = [

  { path: '', component: StateViewComponent },
  { path: 'district', component: DistrictViewComponent },
  { path: 'state', component: StateViewComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
