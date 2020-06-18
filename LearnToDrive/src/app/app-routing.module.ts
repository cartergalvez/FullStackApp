import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PTestComponent } from './pages/p-test/p-test.component';

import { MainComponent } from './main/main.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EndscreenComponent } from './pages/endscreen/endscreen.component';
import { TestingPageComponent } from './pages/testing-page/testing-page.component';

import { GuideBookComponent } from './pages/guide-book/guide-book.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthGuardService } from './services/auth-guard.service';
import { HistoryComponent } from './pages/history/history.component';
import { ResultsComponent } from './pages/results/results.component';


const routes: Routes = [
  { path: 'pTest', component: PTestComponent },
{ path: 'GuideBook', component: GuideBookComponent},
{ path: 'SignUp', component: SignUpComponent },
{ path: 'Login', component: LoginComponent },
{ path: 'TestPage', component: TestingPageComponent, canActivate: [AuthGuardService] },
{ path: 'home', component: HomePageComponent },
{ path: 'result/:id' , component: ResultsComponent},
{ path: 'History', component: HistoryComponent, canActivate: [AuthGuardService] },
{ path: 'endScreen', component: EndscreenComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '**', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
