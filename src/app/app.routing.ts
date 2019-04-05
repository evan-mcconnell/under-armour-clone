import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { StoreComponent } from './store/store.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'store',
    component: StoreComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
