import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: [];
  
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() { 
    this.productService.getAll()
    .subscribe((products: any) => {
      this.products = products._embedded.products;
      console.log('###', this.products);
    })
  }

  createProduct(){
    this.router.navigate(['add-product']);
  }

}


