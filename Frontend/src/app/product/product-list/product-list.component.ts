import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {Router} from '@angular/router';
import { Product } from 'src/app/api/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: Observable<any[]>;
  
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() { 
    this.getProducts();
  
  }

  getProducts() {
    this.productService.getAll()
    .subscribe((response: any) => {
      this.products = response._embedded.products;
      console.log('###', response);
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


