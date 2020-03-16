import { Injectable } from '@angular/core';
import { Product } from './models/product.model';
import { findLast } from '@angular/compiler/src/directive_resolver';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor( private http:HttpClient) { }
  getAllProduct(){
    return this.http.get<Product[]>(environment.url_api);
  }
  geProduct(id:string){
    return this.http.get<Product>(`${environment.url_api}${id}`);
  }
  createProduct(product:Product){
    return this.http.post(environment.url_api, product)
  }
}
