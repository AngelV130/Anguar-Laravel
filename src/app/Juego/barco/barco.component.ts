import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { animate, trigger, state, style, transition } from '@angular/animations';
import { Observable, timeInterval, of, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { io, Socket } from 'socket.io-client';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-barco',
  templateUrl: './barco.component.html',
  styleUrls: ['./barco.component.css'],
  animations: [
    trigger('animacionImagen', [
      state('estadoInicial', style({
        transform: 'translateX(-300px)'
      })),
      state('estadoFinal', style({
        transform: 'translateX(600%)'
      })),
      transition('estadoInicial => estadoFinal', animate('3500ms')),
      transition('estadoFinal => estadoInicial', animate('0ms'))
    ])
  ]
})
export class BarcoComponent implements OnInit{
  isChecked = false;
  constructor(private elemento: ElementRef,private http:HttpClient){}
  public form!: FormGroup;
  seocket = io('localhost:3333')
  partida!:number
  partidas!:any[]
  v1:boolean = true
  v2:boolean = true
  v3:boolean = true
  ngOnInit(): void {
    this.form = new FormGroup({
      ventana: new FormControl('',Validators.required)
    });
    this.seocket.on('partidas',(data)=>{
      this.partidas = data
      console.log(data,"    3")
    })
    this.seocket.on('desconexion',(data)=>{
      console.log(data)
      location.reload()
    })
  }

  estadoActual = 'estadoInicial';
  cambiarEstado() {
    this.estadoActual = (this.estadoActual === 'estadoInicial' ? 'estadoFinal' : 'estadoInicial');
  }
  iniciarJuego(){
    this.http.post<any>('http://localhost:3333/partida',null).subscribe((res)=>{
      this.partida = res.id
      this.partidas.push(res)
    })
  }
  buscarPartidas(id:number){
    this.http.get<any>(`http://localhost:3333/partida/${id}`).subscribe((res)=>{
      if(res.ventan1 != ''){
        this.v1 = false
      }
      if(res.ventan2 != ''){
        this.v2 = false
      }
      if(res.ventan3 != ''){
        this.v3 = false
      }
      this.partida = id
    })
  }
  onSubmit(){
    console.log(this.form.get('ventana')?.value)
    this.seocket.emit('conectar',{id:this.partida,ventana:this.form.get('ventana')?.value})
    this.seocket.on('conectar',(data)=>{
      console.log(data)
      this.seocket.on(data,(dato:any)=>{
        this.cambiarEstado()
        const interval =setInterval(()=>{
          const miElemento = this.elemento.nativeElement.querySelector('#idDelElemento').getBoundingClientRect();
          console.log(miElemento.left)     
          var ventanaAncho = window.innerWidth;
          var ventanaAlto = window.innerHeight;
          if (
            miElemento.top < 0 || 
            miElemento.left < 0 || 
            miElemento.right > ventanaAncho || 
            miElemento.bottom > ventanaAlto
          ) {
            console.log(dato)
            this.seocket.emit('turno',{id:this.partida,socket:dato})
            console.log('turno del otro') 
            clearInterval(interval)
          } else {
            console.log("La etiqueta está dentro de la pantalla.");
          }
        },800)
      })
    })
  }
  ejemplo(){
    this.seocket.emit('desconexion',this.partida)
    location.reload()
  }
  ngOnDestroy(): void{
    this.seocket.emit('desconexion',this.partida)
  }
}
