import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/api/product';
import { Status } from 'src/app/api/types';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  product: Product;
  userId;
  isPaying: boolean = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private userService: UserService,
    private http: HttpClient,
    private router: Router
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
        if(this.product.status!==Status.PAYMENT_ACCEPTED){
          console.log('### checking payment status on init')
          this.checkPaymentStatus(this.product);
        }
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

  public cancelReservation(product: Product) {
    product.status = Status.APPROVED;
    product.customerId = null;
    this.productService.update(product).subscribe(
      res => {console.log('### Cancel Reservation', res)}
    )
  }

  public checkPaymentStatus(product: Product) {
    this.http.get(`https://gateway.gear.mycelium.com/gateways/:api_gateway_id/orders/${product.paymentId}`)
    .subscribe((response) => {
      console.log('### check payment status: ', response);
      if (response['status']===2){
        console.log('### PAYMENT ACCEPTED');
        product.status = Status.PAYMENT_ACCEPTED;
        this.productService.update(product).subscribe(
          res => {console.log('### Product Status: PAYMENT ACCEPTED', product)}
        )
      }
    }
    )
  }

  public createOrderAndPay(product: Product){
    console.log('### Create Order ###');
    this.isPaying = true;

    const apiGatewayId = "1e57f2ac18c3a4fdc55feaa3fe0845824ea13f3a41ef09443370033754ae476a";

    // const params = new URLSearchParams();
    // params.set('amount', product.sellingPrice.toString());
    // params.set('callback_data', 'your custom data');
    // console.log('### Http Post Params: ', params[1], params['callback_data']);

    // this.http.post(`https://gateway.gear.mycelium.com/gateways/${apiGatewayId}/orders?amount=${product.sellingPrice.toString()}&callback_data="yourCustomData"`, {})
    // .pipe(
    //   map((response) => {return response})
    // )

    this.http.post(`https://gateway.gear.mycelium.com/gateways/1e57f2ac18c3a4fdc55feaa3fe0845824ea13f3a41ef09443370033754ae476a/orders?amount=${product.sellingPrice}&callback_data=${product.id}`, {})
    .subscribe(
      (response) => {
        console.log('###', response);
        window.open(`https://gateway.gear.mycelium.com/pay/${response['payment_id']}`, "_blank");
        this.product.paymentId = response['payment_id'];
        this.productService.update(product).subscribe(res => {
          console.log('### added PaymentId to Product: ', res);
        })
        // window.location.href =  `https://gateway.gear.mycelium.com/pay/${response['payment_id']}`
      }
    )
    // this.http.post(`https://gateway.gear.mycelium.com/gateways/:apiGatwayId/orders?amount=150&callback_data=yourCustomData`)
  }

}
