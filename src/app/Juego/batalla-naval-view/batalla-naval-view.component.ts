import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/futbol/paises.service';

@Component({
  selector: 'app-batalla-naval-view',
  templateUrl: './batalla-naval-view.component.html',
  styleUrls: ['./batalla-naval-view.component.css']
})
export class BatallaNavalViewComponent  implements OnInit{
  public turno:string = 'turno1'
constructor(private paisesSVC:PaisesService,private http:HttpClient,el:ElementRef){}
  ngOnInit(): void {
    
  }
  conectarPartida(){
    
  }

  
}
