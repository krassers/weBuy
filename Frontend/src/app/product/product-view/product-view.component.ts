import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/api/product';
import { Status } from 'src/app/api/types';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  product: Product;
  userId;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getUserId()
    .subscribe(userId => {
      this.userId = userId;
    });

    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.productService.getById(id)
      .subscribe((response) => {
        this.product = response;
      })
    }
    
  }

  public reserveProduct(product: Product) {
    product.status = Status.RESERVED;
    product.customerId = this.userId;
    this.productService.update(product).subscribe(
      res => {console.log('### UPDATE:', res)}
    )   
    
  }

}
