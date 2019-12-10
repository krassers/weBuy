import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {


  productForm;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.productForm = new FormGroup({
      'name': new FormControl(''),
      'description': new FormControl(''),
      'purchasePrice': new FormControl(''),
      'sellingPrice': new FormControl(''),
      'status': new FormControl(''),
      'pictureUrl': new FormControl('')

    });
  }

  addProduct() {
    const product = this.productForm.value;
    this.productService.create(product)
      .subscribe((response: any) => {
        console.log('### created product', response);
        alert('created successfully');
        this.router.navigate(['/products']);
      })
  }

}
