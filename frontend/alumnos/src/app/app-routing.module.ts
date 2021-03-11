import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'estudiantes',
    loadChildren: () => import('./pages/estudiantes/estudiantes.module').then( m => m.EstudiantesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'create-estudiante',
    loadChildren: () => import('./pages/create-estudiante/create-estudiante.module').then( m => m.CreateEstudiantePageModule)
  },
  {
    path: 'create-estudiante/:id',
    loadChildren: () => import('./pages/create-estudiante/create-estudiante.module').then( m => m.CreateEstudiantePageModule)
  },
  {
    path: 'detail-estudiantes/:id',
    loadChildren: () => import('./pages/detail-estudiantes/detail-estudiantes.module').then( m => m.DetailEstudiantesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
