import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Status } from 'src/app/api/types';
import { Product } from 'src/app/api/product';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {


  productForm;

  constructor(
    private productService: ProductService,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    this.productForm = new FormGroup({
      'name': new FormControl(''),
      'description': new FormControl(''),
      'purchasePrice': new FormControl(''),
      'sellingPrice': new FormControl(''),
      'status': new FormControl(''),
      'pictureUrl': new FormControl(''),
      'supplierId': new FormControl('')

    });
  }

  addProduct() {
    const product = this.productForm.value;
    product.status = Status.PENDING;
    this.productService.create(product)
      .subscribe((response: Product) => {
        this.toastr.success(`Added Product ${product.name} successfully!`)
        this.router.navigate(['/products']);
      })
  }

}
