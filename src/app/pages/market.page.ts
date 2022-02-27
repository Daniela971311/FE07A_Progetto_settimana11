import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import * as prodotti from '../products.service';




@Component({
  template: `
  <h1>Negozio</h1>

  <p *ngIf = 'marketProducts.length==0' class="caricamento">Caricamento dei prodotti...</p>

  <div class="container-fluid text-center">
    <div class="mb-4 " *ngFor="let product of marketProducts">
    <div class="card-body">
      <h5 class="card-title">{{product.name}}</h5>
      <p class="card-text">{{product.price | currency: 'EUR'}}</p>
      <button type="button" class="btn btn-dark" [routerLink]="['/dettagli', product]">Dettagli</button>
    </div>
  </div>
  </div>

`,
styles: [`
h1{
  font-size:30px;
  margin-left:20px;

}
.caricamento{
  font-size:20px;
  margin-left:20px;
}
.btn {
  background-color:black;
}

body{
  color:white;
}
.text-center{
  display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
}
.card-body{
  flex: 1 1 auto;
    padding: 1rem 1rem;
    width: 35vw;
    background-color: rgba(51,51,51,0.8356384790244222);
    border-radius: 7px;

}

`],
})
export class MarketPage implements OnInit {

  marketProducts: Product[]= [];


  constructor(private http:HttpClient) {}

  ngOnInit(): void {


setInterval(()=>{

  this.marketProducts=prodotti.prodotti;
    }, 2)
  }

}


