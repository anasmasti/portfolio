import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { SideNavbarComponent } from './layout/components/side-navbar/side-navbar.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainLoadingComponent } from './shared/main-loading/main-loading.component';
import { FullscreenMenuComponent } from './layout/components/fullscreen-menu/fullscreen-menu.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MainHeaderComponent } from './layout/components/main-header/main-header.component';
import { MainContentComponent } from './layout/components/main-content/main-content.component';
import { NgxJsonLdModule } from 'ngx-json-ld';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SideNavbarComponent,
    MainLoadingComponent,
    FullscreenMenuComponent,
    MainLayoutComponent,
    MainHeaderComponent,
    MainContentComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserModule,
    NgxJsonLdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
