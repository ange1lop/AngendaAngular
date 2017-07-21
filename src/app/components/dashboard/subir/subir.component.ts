import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service'

@Component({
  selector: 'app-subir',
  templateUrl: './subir.component.html',
  styleUrls: ['./subir.component.css']
})
export class SubirComponent implements OnInit {
  private model = {
    idContacto: 11,
    stringFoto: ''
  }
  constructor(private usuarioService:UsuarioService) { 

  }

  ngOnInit() {
  }

  subir(){
    let formData = new FormData();
    formData.append("file", this.model.stringFoto);
    console.log(formData);
    let headers = new Headers({
        'Content-Type': 'multipart/form-data'
    });
  }

}
