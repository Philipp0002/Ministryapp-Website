import { PrivacyPageComponent } from './privacy/privacy-page/privacy-page.component';
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
  { path: 'privacy', component: PrivacyPageComponent },
  {
    path: 'gdpr.php',
    pathMatch: 'prefix',
    redirectTo: '/privacy'
  },
  {
    path: 'gdpr',
    pathMatch: 'prefix',
    redirectTo: '/privacy'
  },
  {
    path: 'en/gdpr.html',
    pathMatch: 'prefix',
    redirectTo: '/privacy'
  },
  {
    path: 'de/gdpr.html',
    pathMatch: 'prefix',
    redirectTo: '/privacy'
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
