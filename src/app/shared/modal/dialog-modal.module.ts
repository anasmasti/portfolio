import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DialogModalComponent } from 'src/app/shared/modal/dialog-modal.component';
import { HttpLoaderFactory } from '../../app.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DialogModalComponent],
  imports: [
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    CommonModule,
  ],
  exports: [DialogModalComponent],
})
export class DialogModalModule {}
