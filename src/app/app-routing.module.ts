import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './extra-pages/page-not-found.component';
import { MainModuleComponent } from './main-module/main-module.component';


const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
   {
    path: '',
    component: MainModuleComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./main-module/main-module.module').then(m => m.MainModuleModule)
  }]},
  {
    path: '**',
    component : PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
