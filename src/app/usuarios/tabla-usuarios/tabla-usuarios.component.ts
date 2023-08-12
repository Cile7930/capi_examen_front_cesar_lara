import { Component } from '@angular/core';
import { usuario } from '../../Models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service'; 

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent {
usuarios: usuario[]=[];
constructor(private UsuariosService: UsuariosService){ 
}
ngOnInit(){
  this.UsuariosService.getAllUsers().subscribe(data => {
    this.usuarios = data;
    console.log('se muestra', data);
  })
} 
}
