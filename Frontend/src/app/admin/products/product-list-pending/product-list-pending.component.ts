import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ProductService } from "src/app/services/product.service";
import { Status } from "src/app/api/types";
import { Product } from "src/app/api/product";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-list-pending",
  templateUrl: "./product-list-pending.component.html",
  styleUrls: ["./product-list-pending.component.css"]
})
export class ProductListPendingComponent implements OnInit {
  pendingProducts = undefined;
  availableProducts = undefined;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productService.getByStatus(Status.PENDING).subscribe(products => {
      this.pendingProducts = products;
      console.log(products);
    });

    this.productService.getByStatus(Status.AVAILABLE).subscribe(products => {
      this.availableProducts = products;
      console.log(products);
    });
  }

  onAccept(product: Product) {
    this.productService
      .update({ ...product, status: Status.AVAILABLE })
      .subscribe(updateResponse => {
        console.log("onAccept", updateResponse);
        window.location.reload();
      });
  }

  onReject(product: Product) {
    this.productService
      .update({ ...product, status: Status.REJECTED })
      .subscribe(updateResponse => {
        console.log("onReject", updateResponse);
        window.location.reload();
      });
  }

  onApprove(product: Product) {
    this.router.navigateByUrl("admin/pending-products/approve/"+product.id)
  }
}
