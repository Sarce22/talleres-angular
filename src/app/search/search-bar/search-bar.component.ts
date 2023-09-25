import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  nombreHijo: String = ""
  @Output() nombre = new EventEmitter<any>()

constructor(){

}

obtenerNombre(){
  this.nombre.emit(this.nombreHijo)
}
}
