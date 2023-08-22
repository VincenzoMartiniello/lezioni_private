import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoposcuolaRoutingModule } from './doposcuola-routing.module';
import { DoposcuolaComponent } from './doposcuola.component';
import { Title } from '@angular/platform-browser';


@NgModule({
  declarations: [
    DoposcuolaComponent
  ],
  imports: [
    CommonModule,
    DoposcuolaRoutingModule
  ],
  exports:[DoposcuolaComponent]
})
export class DoposcuolaModule {
  constructor(private title:Title){
    this.title.setTitle("doposcuola");
  }
 }
