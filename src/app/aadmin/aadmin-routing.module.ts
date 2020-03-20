import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormProductComponent} from './components/form-product/form-product.component';
import {NavComponent} from './components/nav/nav.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {TableComponent} from './components/table/table.component';
import {ProductListComponent} from './components/product-list/product-list.component';
// import {CargaProductoComponent} from './components/carga-producto/carga-producto.component';


const routes: Routes = [
  {
    path: '',
    component: NavComponent, 
    children:[
      {
        path: 'create',
        component: FormProductComponent,
      },
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'table',
        component: TableComponent,
      },
      {
        path: 'product',
        component: ProductListComponent,
      },
      {
        path: 'product/create',
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
