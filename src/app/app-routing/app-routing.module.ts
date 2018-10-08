import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MyRunesComponent } from '../myRunes/myRunes.component';
import { AnalysisComponent } from '../analysis/analysis.component';
import { TickRateComponent} from '../tick-rate/tick-rate.component'

const routes: Routes = [
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
  { path: 'calculator', component: DashboardComponent },
  { path: 'myRunes', component: MyRunesComponent },
  { path: 'analysis', component: AnalysisComponent },
  { path: 'tickRate', component: TickRateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }