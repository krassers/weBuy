import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/api/product";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-my-products",
  templateUrl: "./my-products.component.html",
  styleUrls: ["./my-products.component.css"]
})
export class MyProductsComponent implements OnInit {
  products: Product[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
