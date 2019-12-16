import { Component, OnInit } from "@angular/core";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product-list-pending",
  templateUrl: "./product-list-pending.component.html",
  styleUrls: ["./product-list-pending.component.css"]
})
export class ProductListPendingComponent implements OnInit {
  pendingProducts = undefined;
  availableProducts = undefined;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getByStatus("pending").subscribe(products => {
      this.pendingProducts = products;
      console.log(products);
    });

    this.productService.getByStatus("available").subscribe(products => {
      this.availableProducts = products;
      console.log(products);
    });
  }
}
