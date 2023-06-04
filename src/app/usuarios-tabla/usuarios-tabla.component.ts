import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { RegistroService } from '../services/usuario/registro.service';

@Component({
  selector: 'app-usuarios-tabla',
  templateUrl: './usuarios-tabla.component.html',
  styleUrls: ['./usuarios-tabla.component.css']
})
export class UsuariosTablaComponent implements OnInit{
  constructor(private registroSVC:RegistroService){}
  public USUARIOS!:Usuario[];
  public   columnas = [
    {titulo: "Nombre"},
    {titulo: "Correo"},
    {titulo: "Rol"},
    {titulo: "Estado"},
  ];
  ngOnInit(): void {
    this.obtenerUsuarios();
  }
  obtenerUsuarios(){
    this.registroSVC.obtenerUsuarios().subscribe(res=>{
      this.USUARIOS = res;
    })
  }
}
