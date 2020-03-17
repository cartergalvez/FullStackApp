import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PTestComponent } from './pages/p-test/p-test.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [{path: 'gamePage', component: PTestComponent},
{path: 'home',component: MainComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
