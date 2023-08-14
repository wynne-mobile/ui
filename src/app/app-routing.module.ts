import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainLayoutContainerComponent } from './shared/main-layout-container/main-layout-container.component';
import { SettingsComponent } from './settings/settings.component';
import { SimpleLayoutContainerComponent } from './shared/simple-layout-container/simple-layout-container.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorLayoutContainerComponent } from './shared/error-layout-container/error-layout-container.component';
import { LoginComponent } from './login/login.component';
import { SubLayoutContainerComponent } from './shared/sub-layout-container/sub-layout-container.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: MainLayoutContainerComponent,
    children: [{
      path: '',
      component: DashboardComponent
    }]
  },
  {
    path: 'task',
    component: SubLayoutContainerComponent,
    loadChildren: () => import('../app/task/task.module').then(m => m.TaskModule)
  },
  {
    path: 'settings',
    component: SubLayoutContainerComponent,
    loadChildren: () => import('../app/settings/settings.module').then(m => m.SettingsModule)
  },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
