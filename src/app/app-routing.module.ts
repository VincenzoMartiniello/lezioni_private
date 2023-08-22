import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 { path: 'didattica_a_distanza', loadChildren: () => import('./lazy/didattica-a-distanza/didattica-a-distanza.module').then(m => m.DidatticaADistanzaModule) },
 { path: 'contatti', loadChildren: () => import('./lazy/contatti/contatti.module').then(m => m.ContattiModule) }, 
 { path: 'doposcuola', loadChildren: () => import('./lazy/doposcuola/doposcuola.module').then(m => m.DoposcuolaModule) }, 
 { path: 'home', loadChildren: () => import('./lazy/home/home.module').then(m => m.HomeModule) },
 { path: '', redirectTo:'home',pathMatch: 'full' },
 { path: 'chi_siamo', loadChildren: () => import('./lazy/chi-siamo/chi-siamo.module').then(m => m.ChiSiamoModule) },
 { path: 'intrattenimento', loadChildren: () => import('./lazy/intrattenimento/intrattenimento.module').then(m => m.IntrattenimentoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
