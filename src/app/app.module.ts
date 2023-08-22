import { DidatticaADistanzaModule } from './lazy/didattica-a-distanza/didattica-a-distanza.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { ContattiModule } from './lazy/contatti/contatti.module';
import { DoposcuolaModule } from './lazy/doposcuola/doposcuola.module';
import { HomeModule } from './lazy/home/home.module';
import { ChiSiamoModule } from './lazy/chi-siamo/chi-siamo.module';
import { IntrattenimentoModule } from './lazy/intrattenimento/intrattenimento.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    RouterModule,
    DidatticaADistanzaModule,
    ContattiModule,
    DoposcuolaModule,
    HomeModule,
    ChiSiamoModule,
    IntrattenimentoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
