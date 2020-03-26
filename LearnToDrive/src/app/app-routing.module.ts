import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PTestComponent } from './pages/p-test/p-test.component';

import { MainComponent } from './main/main.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EndscreenComponent } from './pages/endscreen/endscreen.component';
import { TestingPageComponent } from './pages/testing-page/testing-page.component';
import { InfoComponent } from './pages/info/info.component';


const routes: Routes = [{ path: 'gamePage', component: PTestComponent },
{path: 'Info', component: InfoComponent},
{path: 'TestPage',component:TestingPageComponent},
{ path: 'home', component: HomePageComponent },
{path:'endScreen',component: EndscreenComponent},
{path: '',redirectTo:'/home', pathMatch:'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
