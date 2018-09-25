import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ShiftsComponent } from '../shifts/shifts.component';
import { CoverageComponent } from '../coverage/coverage.component';
import { ShiftpickComponent } from '../shiftpick/shiftpick.component';

const routes: Routes = [
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
  { path: 'profile', component: UserProfileComponent },
  { path: 'calculator', component: DashboardComponent },
  { path: 'shifts', component: ShiftsComponent },
  { path: 'coverage', component: CoverageComponent },
  { path: 'shiftpick', component: ShiftpickComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }