import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from "./logout/logout.component";
import { RegisterComponent } from "./register/register.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { ShoppingCartComponent } from "./shopping-cart/shopping-cart.component";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { ProductFormComponent } from "./product/product-form/product-form.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; // <== add the imports!
import { UserService } from "./services/user.service";
import { ToastNoAnimationModule, ToastrModule } from "ngx-toastr";
import { JwtModule } from "@auth0/angular-jwt";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ShowHidePasswordModule } from "ngx-show-hide-password";

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    CheckoutComponent,
    ProductListComponent,
    ProductFormComponent,
    ShoppingCartComponent
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
