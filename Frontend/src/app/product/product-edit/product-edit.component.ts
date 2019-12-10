import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

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

    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.productService.getById(id)
      .subscribe((response) => {
        this.productForm.patchValue(response);
      });
    }
  }

  editProduct() {
    const product = this.productForm.value;
    this.productService.update(product)
    .subscribe((response: any) => {
      console.log('### updated product', response);
      alert('updated successfully');
      this.router.navigate(['/products']);
    })
  }

}
