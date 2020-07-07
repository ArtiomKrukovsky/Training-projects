import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html'
})
export class ProductItemsComponent implements OnInit {
  @Input() product: Product;

  constructor() { }
  ngOnInit(): void { }
}

interface Product {
  name: string,
  shortname: string,
  price: number,
  details: string
}
