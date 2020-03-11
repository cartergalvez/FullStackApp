import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PTestComponent } from './pages/p-test/p-test.component';


const routes: Routes = [{path: 'gamePage', component: PTestComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
