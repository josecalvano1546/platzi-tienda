import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tienda';
  items=['jose', 'nicolas' , 'Hola Mundo'];
 
  addItem(){
    this.items.push('nuevoItem')
  }
  deleteItems(index: number){
    this.items.splice(index,1);
  }
 
}
