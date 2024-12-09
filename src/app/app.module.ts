import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './root/app.component';
import { TabelaProtocoloComponent } from './tabela-protocolo/tabela-protocolo.component';
import { FromProtocoloComponent } from './from-protocolo/from-protocolo.component';
import { FormsModule } from '@angular/forms';
import { FiltroPesquisaPipe } from './filtro-pesquisa.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaProtocoloComponent,
    FromProtocoloComponent,
    FiltroPesquisaPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
