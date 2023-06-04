import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Roles } from '../models/roles';
import { Usuario } from '../models/usuario';
import { RegistroService } from '../services/usuario/registro.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit{
  constructor(private registroSVC:RegistroService,private rutas:Router,private params:ActivatedRoute){}
  public form!:FormGroup;
  public id!:number;
  public user!:Usuario
  public ROLES!:Roles[];
  ngOnInit(): void {
    this.params.params.subscribe(param=>{
    this.id = +param['id'];
  }).unsubscribe();
    this.buscarUsuario()
    this.obtenerRoles();
    this.form = new FormGroup({
      name: new FormControl('',Validators.required),
      rol_id: new FormControl('',[Validators.required]),
      status: new FormControl('',Validators.required),
    })
  }


  buscarUsuario(){
    this.registroSVC.obtenerUsuario(this.id).subscribe(res=>{
      console.log(res);
      this.form = new FormGroup({
        name: new FormControl(res.name,Validators.required),
        rol_id: new FormControl(res.rol_id,[Validators.required]),
        status: new FormControl(res.status,Validators.required),
      })
    })
  }
  actualizaUsuario(){
    this.user = this.form.value;
    this.registroSVC.actualizar(this.user,this.id).subscribe(res=>{
      console.log("Actualizado")
      this.rutas.navigate(['usuarios']);
    })
  }
  obtenerRoles(){
    this.registroSVC.obtenerRoles().subscribe(res=>{
      this.ROLES = res
    })
  }
}
