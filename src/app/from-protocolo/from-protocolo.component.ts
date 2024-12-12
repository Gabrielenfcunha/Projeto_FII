import { Component, EventEmitter, input, Output, output } from '@angular/core';
import { Protocolo } from '../protocolo';
import { ProtocoloService } from '../protocolo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-from-protocolo',
  standalone: false,
  
  templateUrl: './from-protocolo.component.html',
  styleUrl: './from-protocolo.component.css'
})
export class FromProtocoloComponent {
  protocolos = new Protocolo();
  id?:number;
  botaoAcao = "enviar";

  constructor(private protocoloService: ProtocoloService,
    private route:ActivatedRoute
   ){
    this.id = +this.route.snapshot.params['id'];
    if(this.id){
        this.botaoAcao = "Editar";
        this.protocolos = this.protocoloService.buscarPorId(this.id);
    }
   }

   Salvar() {
    if(this.id){
      this.protocoloService.editar(this.id, this.protocolos)
      alert("Editado o protocolo com sucesso")
    }
    else{ 
      alert("cadastrado o protocolo com sucesso")
      this.protocoloService.inserir(this.protocolos);
      this.protocolos = new Protocolo();
    }
  }
}
