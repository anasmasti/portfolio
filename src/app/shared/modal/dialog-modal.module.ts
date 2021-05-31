import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { DialogModalComponent } from 'src/app/shared/modal/dialog-modal.component';
import { HttpLoaderFactory } from '../../app.module';


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
  ],
  exports: [DialogModalComponent],
})
export class DialogModalModule {}
