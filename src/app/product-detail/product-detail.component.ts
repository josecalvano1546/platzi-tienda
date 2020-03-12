import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private rout:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.rout.params.subscribe((params: Params ) => {
      console.log(params)
      
    });
    
  }

}
