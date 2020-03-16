import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 
  clickProduct(id:number){
    console.log('product');
    console.log(id)
  };
  
  productos: Product[] = [];
  
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
   this.productsService.getAllProduct().subscribe(productos=>{
    this.productos = productos;
    })
  }

  
 
}
