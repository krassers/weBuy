import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';



@NgModule({
  declarations: [ProductListComponent, ProductFormComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
