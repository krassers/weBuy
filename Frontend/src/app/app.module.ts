import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    CheckoutComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductViewComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
