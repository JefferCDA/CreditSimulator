import { PermissionsGuard } from './guards/permissions/permissions.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'simulator',
    pathMatch: 'full',
  },

  {
    path: 'simulator',
    loadChildren: () =>
      import('./components/simulator/simulator.module').then(
        (m) => m.SimulatorModule
      ),
  },
  {
    path: 'management-rates',
    loadChildren: () =>
      import('./components/management-rates/management-rates.module').then(
        (m) => m.ManagementRatesModule
      ),
    canActivate: [PermissionsGuard],
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
