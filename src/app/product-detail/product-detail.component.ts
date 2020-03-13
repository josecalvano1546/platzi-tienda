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
      this.product = this.productService.geProduct(id);
      console.log(this.product);
    });
    
  }

}
