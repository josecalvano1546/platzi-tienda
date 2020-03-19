import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../products.service'
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]=[];
  displayedColumns: string[] = ['ID', 'TITULO', 'PRECIO','ACCIONES'];

  constructor(
    private productService:ProductsService,
    
  ) { }

  ngOnInit(): void {
    this.obtenerProductos()
  }
  obtenerProductos(){
    this.productService.getAllProduct()
    .subscribe(productos =>{
      this.products= productos;
    })
  }

  eliminarProducto(id:string){
    this.productService.deleteProduct(id)
    .subscribe(respuesta =>{
     this.obtenerProductos();
    })
  }

  



}
