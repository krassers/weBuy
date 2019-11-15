import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    {"name":"Hallo", "description":"hallo", "price":13, "status": "READY"},
    {"name":"Hello", "description":"hallo", "price":13, "status": "READY"},
    {"name":"Hola", "description":"hallo", "price":13, "status": "READY"},
    {"name":"Servus", "description":"hallo", "price":13, "status": "READY"},
    {"name":"Hello", "description":"hallo", "price":13, "status": "READY"},
  ]
    
  

  constructor() { }

  ngOnInit() { }

}


