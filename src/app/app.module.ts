import { ImprintPageComponent } from './imprint/imprint-page/imprint-page.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import {TranslateModule} from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { PrivacyPageComponent } from './privacy/privacy-page/privacy-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    ImprintPageComponent,
    PrivacyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    TranslateModule.forRoot()
  ],
  providers: [Title],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
