import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { RoomModalComponent } from './room-modal/room-modal.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';

export function createTranslateLoader(http: HttpClient) {
  console.log('wow');
  return new TranslateHttpLoader(http, './assets/i18n/product/', '.json');
}
@NgModule({
  declarations: [ProductComponent, RoomModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
    },
    isolate: true
    })
  ],
  entryComponents: [RoomModalComponent],
  bootstrap: [ProductComponent]
})
export class ProductModule { }
