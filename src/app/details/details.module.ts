import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../components/components.module';
import { DetailsPage } from './details.page';
import { DetailsPageResolver } from './details.resolver';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: ':slug',
        component: DetailsPage,
        resolve: {
          item: DetailsPageResolver
        }
      }
    ]),
    ComponentsModule
  ],
  declarations: [DetailsPage],
  providers: [DetailsPageResolver]
})
export class DetailsPageModule {}
