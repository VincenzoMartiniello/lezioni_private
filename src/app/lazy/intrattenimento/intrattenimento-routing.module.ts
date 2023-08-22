import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntrattenimentoComponent } from './intrattenimento.component';

const routes: Routes = [{ path: '', component: IntrattenimentoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntrattenimentoRoutingModule { }
