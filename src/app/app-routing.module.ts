import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'posts-default',
        pathMatch: 'full',
      },
      {
        path: 'posts-default',
        loadChildren: () => import('./default-pattern/default-pattern.module').then(m => m.DefaultPatternModule),
      },
      {
        path: 'posts-facade',
        loadChildren: () => import('./facade-pattern/facade-pattern.module').then(m => m.FacadePatternModule),
      },
      {
        path: '**',
        redirectTo: 'posts-default'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
