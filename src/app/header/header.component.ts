import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  nombrePapa :String = ""

  obtenerHijo(nombre:any){
    this.nombrePapa = nombre 
    console.log(this.nombrePapa);
  }

}
