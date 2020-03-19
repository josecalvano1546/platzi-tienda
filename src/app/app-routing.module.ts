import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductComponent} from './product/product.component';
import {ContactComponent} from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LayoutComponent } from './layout/layout.component';



const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, 

    children: [
      {
        path: '',
        redirectTo:'/home',
        pathMatch:'full',
      },
      {
        path: 'home',
       // component: HomeComponent,
       loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ]
  },
  {
    path: 'admin',
  //  // component: HomeComponent,
    loadChildren: () => import('./aadmin/aadmin.module').then(m => m.AadminModule)
   },
  {
    path: '**',
    component: PageNotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
