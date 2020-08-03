import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SoftProjectDetailsComponent } from './pages/soft-project-details/soft-project-details.component';
import { ElecProjectDetailsComponent } from './pages/elec-project-details/elec-project-details.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'softDetails/:headline', component: SoftProjectDetailsComponent },
  { path: 'elecDetails/:headline', component: ElecProjectDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
