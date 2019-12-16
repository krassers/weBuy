import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Status } from 'src/app/api/types';

@Component({
  selector: "app-product-approve",
  templateUrl: './product-approve.component.html',
  styleUrls: ['./product-approve.component.css']
})
export class ProductApproveComponent implements OnInit {

  productForm;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productForm = new FormGroup({
      'id': new FormControl(''),
      'name': new FormControl(''),
      'description': new FormControl(''),
      'purchasePrice': new FormControl(''),
      'sellingPrice': new FormControl(''),
      'status': new FormControl(''),
      'pictureUrl': new FormControl('')
    });
   }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.productService.getById(id)
      .subscribe((response) => {
        this.productForm.patchValue(response);
      });
    }
  }

  approveProduct() {
    const product = this.productForm.value;
    this.productService
      .update({ ...product, status: Status.APPROVED })
      .subscribe(updateResponse => {
        console.log("onApprove", updateResponse);
        this.router.navigate(['/products']);
      });
  }


}
