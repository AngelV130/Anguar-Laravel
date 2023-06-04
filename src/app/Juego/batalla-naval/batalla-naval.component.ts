import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/futbol/paises.service';

@Component({
  selector: 'app-batalla-naval',
  templateUrl: './batalla-naval.component.html',
  styleUrls: ['./batalla-naval.component.css']
})
export class BatallaNavalComponent implements OnInit, OnDestroy {
constructor(private paisesSVC:PaisesService,private http:HttpClient,el:ElementRef){}
  ngOnDestroy(): void {
    this.paisesSVC.salirPartida(this.partida).subscribe((res)=>{
      console.log(res);
    })
  }
public barcos:any = [{name:"A1",status:false},{name:"B1",status:false},{name:"C1",status:false},{name:"D1",status:false},{name:"E1",status:false},{name:"F1",status:false},{name:"G1",status:false},{name:"H1",status:false},{name:"A2",status:false},{name:"B2",status:false},{name:"C2",status:false},{name:"D2",status:false},{name:"E2",status:false},{name:"F2",status:false},{name:"G2",status:false},{name:"H2",status:false},{name:"A3",status:false},{name:"B3",status:false},{name:"C3",status:false},{name:"D3",status:false},{name:"E3",status:false},{name:"F3",status:false},{name:"G3",status:false},{name:"H3",status:false},{name:"A4",status:false},{name:"B4",status:false},{name:"C4",status:false},{name:"D4",status:false},{name:"E4",status:false},{name:"F4",status:false},{name:"G4",status:false},{name:"H4",status:false},{name:"A5",status:false},{name:"B5",status:false},{name:"C5",status:false},{name:"D5",status:false},{name:"E5",status:false},{name:"F5",status:false},{name:"G5",status:false},{name:"H5",status:false},{name:"A6",status:false},{name:"B6",status:false},{name:"C6",status:false},{name:"D6",status:false},{name:"E6",status:false},{name:"F6",status:false},{name:"G6",status:false},{name:"H6",status:false},{name:"A7",status:false},{name:"B7",status:false},{name:"C7",status:false},{name:"D7",status:false},{name:"E7",status:false},{name:"F7",status:false},{name:"G7",status:false},{name:"H7",status:false},{name:"A8",status:false},{name:"B8",status:false},{name:"C8",status:false},{name:"D8",status:false},{name:"E8",status:false},{name:"F8",status:false},{name:"G8",status:false},{name:"H8",status:false}]
public partidas!:any[]
public partida:number = NaN
public disable = 'val1'
public disable2:boolean = false
public turno:string = ''
public botonesUsados:HTMLButtonElement[] = []
public turno_disable:boolean = true
public misBarcos:string[]=[]
public usados:string[] = []
public jugar:boolean = true
  ngOnInit(): void {
    this.paisesSVC.sse().subscribe(res=>{
      if(res == 'partida'){
        this.buscarPartidas()
      }
    })
    this.buscarPartidas()
  }

  ataque(){
    this.paisesSVC.pruebasse(this.partida).subscribe(res=>{
      console.log(res.turno,' ',res.ataque)
      console.log(res)
      if(res.fin == 'fin'){
        if(res.turno == this.turno){
          location.reload()
          alert('has Ganado')
        }
      }else{
        if(res.turno == this.turno){
          this.disable = 'val2'
          let incluye = NaN 
          incluye = this.misBarcos.indexOf(res.ataque.toString())
          if(incluye != -1){
            console.log(this.misBarcos,"  ",this.misBarcos[incluye])
            const img = document.getElementById(this.misBarcos[incluye]+'img') as HTMLImageElement
            img.src = 'https://png.pngtree.com/png-clipart/20210704/original/pngtree-fueguito-png-png-image_6502196.jpg'
            const boton = document.getElementById(res.ataque.toString()) as HTMLButtonElement
            boton.style.backgroundColor = 'red'
            this.misBarcos.splice(incluye,1)
            if(this.misBarcos.length < 1){
              console.log("has perdido", this.turno)
              this.paisesSVC.salirPartida(this.partida).subscribe((res)=>{
                location.reload()
                alert('has perdido')
              })
            }
          }
          const boton = document.getElementById(res.ataque+"T2") as HTMLButtonElement
          boton.style.backgroundColor = 'red'
          console.log(this.botonesUsados[0].disabled, " Usados")
          console.log('hola   ',this.misBarcos)
        }}
    })
  }
  iniciarPartida(id:string){
    const index = this.barcos.findIndex((barco:any)=> {return barco.name == id})
    if (index != -1){
      this.barcos[index].status = true
    }
    const boton = document.getElementById(id) as HTMLButtonElement
    this.botonesUsados.push(boton)
    this.paisesSVC.ataque(this.partida,boton.value).subscribe((res)=>{
      console.log(res)
      boton.disabled = true
      this.disable = 'val1'
    })
  }
  buscarPartidas(){
    this.paisesSVC.buscarPartida().subscribe((res)=>{
      this.partidas = res
    })
  }
  generarBarcos(){
    const pocisiones:string[] = ['A1','A2','A3','A4','A5','A6','A7','A8','B1','B2','B3','B4','B5','B6','B7','B8','C1','C2','C3','C4','C5','C6','C7','C8',
    'D1','D2','D3','D4','D5','D6','D7','D8','E1','E2','E3','E4','E5','E6','E7','E8','F1','F2','F3','F4','F5','F6','F7','F8','G1','G2','G3','G4','G5','G6','G7','G8',
    'H1','H2','H3','H4','H5','H6','H7','H8']
    let cont = 0
    while( cont < 3){
      const pos = (Math.floor(Math.random()*(63 - 0)))
      console.log(pocisiones[pos])
      if(pocisiones[pos] != ''){
        this.misBarcos.push(pocisiones[pos].toString())
        const img = document.getElementById(pocisiones[pos]+"img") as HTMLImageElement
        pocisiones[pos] = ''
        img.src = "https://png.pngtree.com/element_our/20190529/ourmid/pngtree-play-ship-hand-drawn-illustration-image_1208317.jpg"  
        cont = cont + 1;
      }
    }

  }
  unirsePartida(id:number){
    this.partida = id
    this.disable = 'val1'
    this.disable2 = true
    this.jugar = false
    this.paisesSVC.uniresepartida(this.partida).subscribe((res)=>{
      this.partida = res.id
      this.turno = 'turno2'
      this.generarBarcos()
      this.ataque()
      console.log(this.turno)
    })
  }
  creaPartida(){
    this.disable2 = true
    this.paisesSVC.creaPartida(null).subscribe((res)=>{
      this.partida = res.id
      this.jugar = false
      this.turno = 'turno1'
      console.log(this.turno)
      this.generarBarcos()
      this.ataque()
    })
  }
  disabledButtonsUsed(){
    this.botonesUsados.forEach(element => {
      element.disabled = true
    });
  }
}
