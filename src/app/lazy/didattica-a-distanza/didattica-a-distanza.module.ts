import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DidatticaADistanzaRoutingModule } from './didattica-a-distanza-routing.module';
import { DidatticaADistanzaComponent } from './didattica-a-distanza.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    DidatticaADistanzaComponent
  ],
  imports: [
    CommonModule,
    DidatticaADistanzaRoutingModule
  ],
  exports:[DidatticaADistanzaComponent]
})
export class DidatticaADistanzaModule { }
