import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DidatticaADistanzaComponent } from './didattica-a-distanza.component';

const routes: Routes = [{ path: '', component: DidatticaADistanzaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DidatticaADistanzaRoutingModule { }
