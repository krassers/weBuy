import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { ProductAdminComponent } from "./admin/products/product-admin/product-admin.component";
import { ProductListPendingComponent } from "./admin/products/product-admin/product-list-pending/product-list-pending.component";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { ProductAddComponent } from "./product/product-add/product-add.component";
import { ProductEditComponent } from "./product/product-edit/product-edit.component";
import { ProductViewComponent } from "./product/product-view/product-view.component";
import { AuthGuard } from "./auth.guard";
import { MyProductsComponent } from "./product/my-products/my-products.component";

const routes: Routes = [
  { path: "", redirectTo: "products", pathMatch: "full" },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  {
    path: "products",
    component: ProductListComponent
  },
  {
    path: "add-product",
    component: ProductAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "edit-product/:id",
    component: ProductEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "view-product/:id",
    component: ProductViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "admin/pending-products",
    component: ProductListPendingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "admin/product/:id",
    component: ProductAdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "my-products/:userId",
    component: MyProductsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
