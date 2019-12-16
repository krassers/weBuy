import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {Router} from '@angular/router';
import { Product } from 'src/app/api/product';
import { Status } from 'src/app/api/types';

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
    this.productService.getByStatus(Status.APPROVED)
    .subscribe((response: any) => {
      this.products = response;
      console.log('###', this.products);
    })
  }

  createProduct(){
    this.router.navigate(['add-product']);
  }

  viewProduct(id){
    this.router.navigate(['view-product', id])
  }

  editProduct(id){
    this.router.navigate(['edit-product', id])
  }

  deleteProduct(id){
    this.productService.delete(id)
    .subscribe(() => {
      // update list of products here !!!
    })
  }

}


