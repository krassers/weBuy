import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/api/product";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "src/app/services/product.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-my-products",
  templateUrl: "./my-products.component.html",
  styleUrls: ["./my-products.component.css"]
})
export class MyProductsComponent implements OnInit {
  offers: Product[];
  purchases: Product[];
  userId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public productService: ProductService,
    private userService: UserService
  ) {}

  ngOnInit() {
    // Convert route param to number
    this.userService.getUserId().subscribe(userId =>
      this.productService.getMyProducts(userId).subscribe(products => {
        this.offers = products.filter(
          product => product.supplierId === userId
        );
        this.purchases = products.filter(
          product => product.customerId === userId
        );
        console.log(products);
      })
    );
  }

  createProduct() {
    this.router.navigate(["add-product"]);
  }

  viewProduct(id){
    this.router.navigate(['view-product', id])
  }
}
