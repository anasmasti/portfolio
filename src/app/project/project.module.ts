import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { ProjectComponent } from './project.component';


const routes: Routes = [
  {
    path: '',
    component: ProjectComponent
  }
];

@NgModule({
  declarations: [
    ProjectComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
    }),],
})

export class ProjectModule { }
