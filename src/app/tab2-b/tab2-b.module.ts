import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2BPageRoutingModule } from './tab2-b-routing.module';

import { Tab2BPage } from './tab2-b.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2BPageRoutingModule
  ],
  declarations: [Tab2BPage]
})
export class Tab2BPageModule {}
