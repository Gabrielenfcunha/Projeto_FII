import { Component, Input, input } from '@angular/core';
import { ProtocoloService } from '../protocolo.service';
import { Protocolo } from '../protocolo';

@Component({
  selector: 'app-tabela-protocolo',
  standalone: false,
  
  templateUrl: './tabela-protocolo.component.html',
  styleUrl: './tabela-protocolo.component.css'
})
export class TabelaProtocoloComponent {
 listaProtocolo: Protocolo[] = [];
 protoPresquisado = "";

 constructor(private protocoloService: ProtocoloService){
  this.protocoloService = protocoloService;
  this.listaProtocolo = protocoloService.listar();
 }

 deletar(id?: number){
  this.protocoloService.deletar(id)
 }


}



