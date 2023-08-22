import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoposcuolaComponent } from './doposcuola.component';

const routes: Routes = [{ path: '', component: DoposcuolaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoposcuolaRoutingModule { }
