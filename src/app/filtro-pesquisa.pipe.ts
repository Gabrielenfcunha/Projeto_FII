import { Pipe, PipeTransform } from '@angular/core';
import { Protocolo } from './protocolo';

@Pipe({
  name: 'filtroPesquisa',
  pure:false,
  standalone: false
})
export class FiltroPesquisaPipe implements PipeTransform {

  transform(listaProtocolo: Protocolo[], protoPresquisado:string): Protocolo[] {
    if (protoPresquisado.length < 4) {
      return listaProtocolo;
    }

    return listaProtocolo.filter((protocolo:Protocolo) =>{
      return protocolo.protocolo?.toLowerCase().includes(protoPresquisado.toLowerCase())
    })

  }

}
