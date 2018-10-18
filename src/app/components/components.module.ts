import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { PreloadImageComponent } from './preload-image/preload-image.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    PreloadImageComponent
  ],
  exports: [
    PreloadImageComponent
  ],
  entryComponents: [],
})
export class ComponentsModule {}
