import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import * as productsData from './../../../products.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  apiError = null;
  title: string = 'All Categories';
  products: any = (productsData as any).default;
  shoppingCart: any = this.cart;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    const slug = this.route.snapshot.params.slug;
    if (slug) {
      this.title = slug;
      const filtered = this.products.filter(p => p[slug]);
      this.products = filtered[0][slug]
    }
    else {
      this.products = [];
    }

  }

  addToCart(product) {

    var getCart = (this.cart === null) ? [] : this.cart;

    const newProduct = getCart.filter( p => {
      const ap = JSON.parse(p);
      return (ap.id === product.id)
    });

    if( newProduct.length === 0 ) {
      getCart.push(JSON.stringify(product));
      localStorage.setItem('shoppingCart', JSON.stringify(getCart));
    }
  }

  plusCart(id) {

  }

  minusCart(id) {

  }

  findInCart(id) {
    var getCart = (this.cart === null) ? [] : this.cart;

    const newProduct = getCart.filter( p => {
      const ap = JSON.parse(p);
      return (ap.id === id)
    });

    return newProduct.length === 0 ? false : true;
  }

  get cart() {
    return JSON.parse(localStorage.getItem('shoppingCart'))
  }

}
