import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';



@NgModule({
  declarations: [ProductListComponent, ProductFormComponent, ProductAddComponent, ProductEditComponent, ProductViewComponent],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
