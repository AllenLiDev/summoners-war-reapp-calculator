import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShiftsComponent } from './shifts/shifts.component';
import { CoverageComponent } from './coverage/coverage.component';
import { MyRunesComponent } from './myRunes/myRunes.component';

// angular material module dependencies
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    DashboardComponent,
    ShiftsComponent,
    CoverageComponent,
    MyRunesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
