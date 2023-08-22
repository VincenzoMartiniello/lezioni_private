import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntrattenimentoRoutingModule } from './intrattenimento-routing.module';
import { IntrattenimentoComponent } from './intrattenimento.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IntrattenimentoComponent
  ],
  imports: [
    CommonModule,
    IntrattenimentoRoutingModule,
    ReactiveFormsModule,
  ],
  exports :[IntrattenimentoComponent]
})
export class IntrattenimentoModule { }
