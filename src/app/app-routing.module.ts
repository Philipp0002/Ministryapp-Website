import { ImprintPageComponent } from './imprint/imprint-page/imprint-page.component';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  { path: 'imprint', component: ImprintPageComponent },
  {
    path: 'impressum',
    pathMatch: 'prefix',
    redirectTo: '/imprint'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
