import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent {
  productForm = this.fb.group({
   
    id: [null, Validators.required],
    title: [null, Validators.required],
    description: [null, Validators.required],
    image: [],
    price: [null,[Validators.required]],
  });


  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Producto Agregado');
    this.productForm.reset();
  }
}
