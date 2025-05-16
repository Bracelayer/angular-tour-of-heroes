import { Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes =  [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, title:  "DashboardComponent-T"},
    { path: 'detail/:id', component: HeroDetailComponent, title: "HeroDetailComponent-T" },
    { path: 'heroes', component: HeroesComponent, title: "HeroesComponent-T" }
  ];
  
