import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: any[] = [
    {
      customer: 'Jed',
      orderNumber: 354,
      product: 'Long Black',
      options: {
        option: 'Size',
        variation: 'Small'
      },
      pickup: Date.now()
    },
    {
      customer: 'Joe',
      orderNumber: 358,
      product: 'Flat White',
      options: {
        option: 'Milk',
        variation: 'Trim'
      },
      pickup: Date.now()
    },
    {
      customer: 'Dave',
      orderNumber: 362,
      product: 'Long Machiato',
      options: {
        option: 'Extra Shots',
        variation: '1'
      },
      pickup: Date.now()
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
