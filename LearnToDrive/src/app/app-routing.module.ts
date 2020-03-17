import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PTestComponent } from './pages/p-test/p-test.component';

import { MainComponent } from './main/main.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EndscreenComponent } from './pages/endscreen/endscreen.component';


const routes: Routes = [{ path: 'gamePage', component: PTestComponent },
{ path: 'home', component: HomePageComponent },
{path:'endScreen',component: EndscreenComponent},
{path: '',redirectTo:'/home', pathMatch:'full'},
  { path: '**', redirectTo: '/home', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
