import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';


const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'add-product', component: ProductAddComponent},
  {path: 'edit-product/:id', component: ProductEditComponent},
  {path: 'products/:id', component: ProductFormComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
