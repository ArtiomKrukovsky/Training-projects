import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['details-product.component.css']
})

export class DetailsProductComponent implements OnInit {
  @Input() currentProduct: Product;
  constructor() { }

  ngOnInit(): void {
  }

}

interface Product {
  name: string,
  shortname: string,
  price: number,
  details: string
}
