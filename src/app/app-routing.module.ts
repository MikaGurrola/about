import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { state: 'home'}
  },
  {
    path: 'stats',
    loadChildren: './modules/stats/stats.module#StatsModule',
    data: { state: 'stats'}
  },
  {
    path: 'ideas',
    loadChildren: './modules/ideas/ideas.module#IdeasModule',
    data: { state: 'ideas'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
