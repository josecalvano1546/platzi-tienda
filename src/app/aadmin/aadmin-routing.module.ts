import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormProductComponent} from './components/form-product/form-product.component';
import {NavComponent} from './components/nav/nav.component';


const routes: Routes = [
  {
    path: '',
    component: NavComponent, 
    children:[
      {
        path: 'create',
        component: FormProductComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AadminRoutingModule { }
