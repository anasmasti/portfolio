import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { SkillComponent } from './skill.component';


const routes: Routes = [
  {
    path: '',
    component: SkillComponent
  }
];


@NgModule({
  declarations: [
    SkillComponent,
  ],
  imports: [RouterModule.forChild(routes),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
    })],
})

export class SkillModule { }
