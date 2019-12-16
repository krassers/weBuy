import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductAdminComponent } from './admin/products/product-admin/product-admin.component';


const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'add', component: ProductFormComponent},
  {path: 'edit/:id', component: ProductFormComponent},
  {path: 'products/:id', component: ProductFormComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  //{path: 'my-products', component: },
  //{path: 'admin/pending-products', component: },
  {path: 'admin/product/:id', component: ProductAdminComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
