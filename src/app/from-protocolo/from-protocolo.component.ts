import { Component, EventEmitter, input, Output, output } from '@angular/core';
import { Protocolo } from '../protocolo';
import { ProtocoloService } from '../protocolo.service';

@Component({
  selector: 'app-from-protocolo',
  standalone: false,
  
  templateUrl: './from-protocolo.component.html',
  styleUrl: './from-protocolo.component.css'
})
export class FromProtocoloComponent {
  protocolos = new Protocolo();

  constructor(private protocoloService: ProtocoloService){
   }

  Cadastrar() {
    alert("cadastrado o protocolo com sucesso")
    this.protocoloService.inserir(this.protocolos);
    this.protocolos = new Protocolo();
    
  }
}
