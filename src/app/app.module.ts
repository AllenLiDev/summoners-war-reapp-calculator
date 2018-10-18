import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MyRunesComponent } from './myRunes/myRunes.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { TickRateComponent } from './tick-rate/tick-rate.component';
import { GrindsTrackerComponent } from './grinds-tracker/grinds-tracker.component';
import { TeamAnalysisComponent } from './team-analysis/team-analysis.component';

// angular material module dependencies
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MyRunesComponent,
    AnalysisComponent,
    TickRateComponent,
    GrindsTrackerComponent,
    TeamAnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
