import { DialogModalModule } from './shared/modal/dialog-modal.module';
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
    DialogModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
