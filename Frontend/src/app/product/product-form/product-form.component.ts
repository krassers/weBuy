import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service'
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm = new FormGroup({
    'name': new FormControl(''),
    'description': new FormControl(''),
    'purchasePrice': new FormControl(''),
    'sellingPrice': new FormControl(''),
    'status': new FormControl(''),
    'pictureUrl': new FormControl('')
  
  });

  product: any;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {

    


    const id = this.route.snapshot.paramMap.get('id');
    console.log('### Product: ', id);

    if(id) {
      this.productService.getById(id)
      .subscribe((response) => {
        this.productForm.patchValue(response);
      });
    }
  }

}
