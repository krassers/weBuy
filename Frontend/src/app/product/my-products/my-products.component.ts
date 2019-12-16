import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/api/product";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/services/product.service";

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
    private route: ActivatedRoute,
    public productService: ProductService
  ) {}

  ngOnInit() {
    // Convert route param to number
    this.userId = +this.route.snapshot.params["userId"];
    this.productService.getMyProducts(this.userId).subscribe(products => {
      this.offers = products.filter(
        product => product.supplierId === this.userId
      );
      this.purchases = products.filter(
        product => product.customerId === this.userId
      );
      console.log(products);
    });
  }
}
