import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductsService} from '../products.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:Product;

  constructor(private rout:ActivatedRoute, private productService:ProductsService) { 
    
  }

  ngOnInit(): void {
    this.rout.params.subscribe((params: Params ) => {
      
      const id = params.id;
      this.productService.geProduct(id).subscribe(
        producto => {
          this.product = producto;
        }
      )
      console.log(this.product);
    });
    
  }
  crearProducto(){
    const newProducto: Product = {
      id: "111",
      title: "Remera",
      image: "assets/images/mug.png",
      price: 1800,
      description: "Una hermmosa remera de platzi",
      
    };
    this.productService.createProduct(newProducto).subscribe(
      producto => {
        console.log(producto)
      }
    )
  }

}
