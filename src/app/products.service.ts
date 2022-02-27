import { Product } from './models/product'
import { HttpClient } from '@angular/common/http';


export let prodotti: Product[] = [];
export let cart: Product[] = [];

export function addToCart(product: Product){
  console.log(prodotti);
  console.log(product);
  console.log(prodotti.indexOf(product));
  cart.push(product);
}

export function removeToCart(product: Product) {
  prodotti.push(product);
  cart.splice(cart.indexOf(product), 1);
}

export function loadProducts(http: HttpClient): void {
  http.get('http://localhost:4201/products').subscribe((res) => {
    prodotti   = <Product[]>res;
  });

}




// articoli potrebbe cambiare a prodotti












// import { Injectable } from '@angular/core';
// @Injectable({
//   providedIn: 'root'
// })
// export class ProductsService {
// baseUrl = 'http://localhost:4201/products'
//   constructor(private http:HttpClient) { }

//     get(){
//       return this.http.get<Product[]>(`${this.baseUrl}/products`)
//     }
//     getProduct(id:number){
//       return this.http.get<Product>(`${this.baseUrl}/products/${id}`)
//     }
// }
