import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { ProductAdminComponent } from "./admin/products/product-admin/product-admin.component";
import { ProductListPendingComponent } from "./admin/products/product-admin/product-list-pending/product-list-pending.component";
import { UserService } from "./services/user.service";
import { ToastrModule } from "ngx-toastr";
import { JwtModule } from "@auth0/angular-jwt";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ShowHidePasswordModule } from "ngx-show-hide-password";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { ProductAddComponent } from "./product/product-add/product-add.component";
import { ProductEditComponent } from "./product/product-edit/product-edit.component";
import { ProductViewComponent } from "./product/product-view/product-view.component";
import { MyProductsComponent } from "./product/my-products/my-products.component";

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    ProductListComponent,
    ProductAdminComponent,
    ProductListPendingComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductViewComponent,
    NavigationBarComponent,
    MyProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ShowHidePasswordModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ["localhost:4200"]
      }
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
