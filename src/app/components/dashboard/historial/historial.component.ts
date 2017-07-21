import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../../services/contacto.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styles: []
})
export class HistorialComponent implements OnInit {
  private cambio:boolean = false;
  constructor(private contactoService: ContactoService) { }
  private lista:Array<any> = [];

  ngOnInit() {
    this.contactoService.getHistorial().subscribe(res =>{
      let esta:boolean = false;
      let como:Array<any> = res;
      for(let co of como){
        let model:any = {
          accion: co.accion,
          fecha: co.fecha,
          estado: esta,
          cambio: !esta
        }
        this.lista.push(model);
        if(esta){
          esta = false;
        }else {
          esta = true;
        }
      }
    });

  }

}
