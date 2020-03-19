import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-carga-producto',
  templateUrl: './carga-producto.component.html',
  styleUrls: ['./carga-producto.component.css']
})
export class CargaProductoComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    
  }
  private  buildForm(){
    this.form = this.formBuilder.group({
      id: ['',[Validators.required]],
      title: ['',[Validators.required]],
      price: ['',[Validators.required]],
      image: [],
      description: ['',[Validators.required]],
  });
}

}
