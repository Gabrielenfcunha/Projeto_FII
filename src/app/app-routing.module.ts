
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabelaProtocoloComponent } from './tabela-protocolo/tabela-protocolo.component';
import { FromProtocoloComponent } from './from-protocolo/from-protocolo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'tabela', component: TabelaProtocoloComponent},
  {path: 'novo', component: FromProtocoloComponent},
  {path: 'edit/:id', component: FromProtocoloComponent},
  {path: 'from', component: FromProtocoloComponent},

  {path: '**', component:PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
