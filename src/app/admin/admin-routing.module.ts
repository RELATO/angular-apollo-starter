import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./mat-demos/charts/charts.module').then(m => m.ChartsModule),
      },
      {
        path: 'tables',
        loadChildren: () =>
          import('./mat-demos/tables/tables.module').then(m => m.TablesModule),
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./mat-demos/forms/forms.module').then(m => m.FormsModule),
      },
      {
        path: 'mat-grid',
        loadChildren: () =>
          import('./mat-demos/mat-grid/mat-grid.module').then(
            m => m.MatGridModule
          ),
      },
      {
        path: 'mat-components',
        loadChildren: () =>
          import('./mat-components/mat-components.module').then(
            m => m.MatComponentsModule
          ),
      },
      {
        path: 'animations',
        loadChildren: () =>
          import('./mat-demos/animations/animations.module').then(
            m => m.AnimationsModule
          ),
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('../pages/clients/clients.module').then(m => m.ClientsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
