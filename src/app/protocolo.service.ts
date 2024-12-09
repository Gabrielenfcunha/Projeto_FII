import { Injectable } from '@angular/core';
import { Protocolo } from './protocolo';

@Injectable({
  providedIn: 'root'
})
export class ProtocoloService {
  idGen = 6;
  listaProtocolo: Protocolo[] = [
    {id: 1, protocolo:"84/2024", requicao:"1235/2025",quant:0 , descricao:"", dataValidade: new Date("2024-12-05")},
    {id: 2, protocolo:"1o5/2024", requicao:"1235/2025",quant:0 , descricao:"", dataValidade: new Date("2024-12-05")},
    {id: 3, protocolo:"132/2024", requicao:"1235/2025",quant:0 , descricao:"", dataValidade: new Date("2024-12-05")},
    {id: 4, protocolo:"1242/2024", requicao:"1235/2025",quant:0 , descricao:"", dataValidade: new Date("2024-12-05")},
    {id: 5, protocolo:"12772/2024", requicao:"1235/2025",quant:0 , descricao:"", dataValidade: new Date("2024-12-05")}
   ];
  constructor() { }

  listar() {
    return this.listaProtocolo;
  };

  private generateId(){
    return this.idGen++;
  }

  inserir( protocolo : Protocolo){
    protocolo.id = this.generateId();
    this.listaProtocolo.push(protocolo)
  };

  buscarPorId(id :number):Protocolo{
    const protocolo = this.listaProtocolo.find(protocolo => protocolo.id==id);
    return protocolo ?protocolo : new Protocolo();
  }

  editar(id:number , protocolo: Protocolo){
    const indice = this.getIndece(id);
    if(indice >= 0){ 
      this.listaProtocolo[indice] = protocolo;
    }
  }
  deletar(id?: number) {
    const indice = this.getIndece(id);
    if(indice >=0){
      this.listaProtocolo.splice(indice, 1);
    }
  }
  private getIndece(id?: number){
    return this.listaProtocolo.findIndex(
      protocolo => protocolo.id == id 
    );
  }
}
