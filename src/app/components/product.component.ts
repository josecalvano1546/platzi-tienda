import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../models/product.model';

@Component({
    selector: 'app-producto',
    templateUrl:'./product.component.html'
})

export class ProductoComponent{

   @Input() product:Product ;

   @Output() prductClicker:EventEmitter<any> = new EventEmitter();

   addCarr(){
        console.log('Añadir al carrito');
        this.prductClicker.emit(this.product.id)
   }
}