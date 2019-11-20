import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products = [];
  
  constructor(private productService: ProductService) { }

  ngOnInit() { 
    this.productService.getAll()
    .subscribe((response: any) => {
      this.products = response._embedded.products;
      console.log(this.products)
    })
  }

}


