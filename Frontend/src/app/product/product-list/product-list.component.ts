import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {Router} from '@angular/router';
import { Product } from 'src/app/api/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: Array<Product>
  
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() { 
    this.getProducts();
  
  }

  getProducts() {
    this.productService.getAll()
    .subscribe((response: any) => {
      this.products = response;
      console.log('###', this.products);
    })
  }

  createProduct(){
    this.router.navigate(['add-product']);
  }

  deleteProduct(product: Product){
    this.productService.delete(product)
    .subscribe(() => {
      // update list of products here !!!
    })
  }

}


