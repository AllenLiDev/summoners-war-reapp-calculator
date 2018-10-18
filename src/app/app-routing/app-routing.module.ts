import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MyRunesComponent } from '../myRunes/myRunes.component';
import { AnalysisComponent } from '../analysis/analysis.component';
import { TickRateComponent} from '../tick-rate/tick-rate.component';
import { GrindsTrackerComponent } from '../grinds-tracker/grinds-tracker.component';
import { TeamAnalysisComponent } from '../team-analysis/team-analysis.component';

const routes: Routes = [
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
  { path: 'calculator', component: DashboardComponent },
  { path: 'myRunes', component: MyRunesComponent },
  { path: 'analysis', component: AnalysisComponent },
  { path: 'tickRate', component: TickRateComponent },
  { path: 'grindsTracker', component: GrindsTrackerComponent },
  { path: 'teamAnalysis', component: TeamAnalysisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }