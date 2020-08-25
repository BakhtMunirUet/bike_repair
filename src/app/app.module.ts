import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './admin/home/home.component';
import { QuarriesComponent } from './admin/quarries/quarries.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './admin/component/nav/nav.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', children: [
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'quarries', component: QuarriesComponent, pathMatch:'full' }
    ]
  },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuarriesComponent,
    LoginComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
