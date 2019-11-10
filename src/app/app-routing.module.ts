import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoPageComponent } from './features/todo/todo-page/todo-page.component';

import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';
import { ForbiddenPageComponent } from './core/pages/forbidden-page/forbidden-page.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'todos',
    component: TodoPageComponent,
  },
  // {
  //   path: 'clients',
  //   loadChildren: './pages/clients/clients.module#ClientsModule',
  // },
  // {
  //   path: 'algorithms',
  //   loadChildren: './pages/algorithms/algorithms.module#AlgorithmsModule',
  // },

  {
    path: '**',
    component: NotFoundPageComponent,
  },
  {
    path: 'forbidden',
    component: ForbiddenPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
