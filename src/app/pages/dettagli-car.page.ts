import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../models/product';
import * as prodotti from '../products.service';





@Component({
  template: `
   <h1>Dettaglio prodotto: </h1>


    <div class="container-fluid text-center centra1">
      <div *ngIf="product" class="card-body mx-4">
        <h5 class="card-title">{{product.name}}</h5>

        <p class="card-text">{{product.description}}</p>
        <p class="card-text"> {{product.price | currency: 'EUR'}}</p>
      <div class="card-footer mt-5">
        <button type="button" class="btn btn1  mx-2" (click)="add()">Aggiungi al carrello</button>
        <span *ngIf="check>0">Aggiunti {{check}}</span>
        <button type="button" class="btn btn1" [routerLink]="['/cart']">Vai al carrello</button>
      </div>
    </div>
    </div>
    <br>
    <div class="text-center"><button type="button" class="btn  mb-3 btn-indietro bg-dark centra" [routerLink]="['/']">Torna al negozio</button></div>


  `,
  styles: [
    `
  *{color:white;}
  h1{
  font-size:30px;
  margin-left:20px;
  margin-top: 5px;
}
  h5{
    font-size: 2.5rem;
  }
  span{
    font-size:10px;
  }
  .centra1{
  display: flex;
    flex-wrap: wrap;
    align-content: center;
    width: 47vw;
}
.btn1{
  margin: 10px;
    width: 14vw;
    color: black;
  background: radial-gradient(circle, rgb(157 156 156) 4%, rgb(95 95 95) 64%);
  font-weight: bold;
  font-size:11px;
  padding:4px;

}
.centra{
  background: radial-gradient(circle, rgb(157 156 156) 4%, rgb(95 95 95) 64%);
}
p.card-text{
  margin-top: 50px;
  font-size: 18px;
}
.card-body, .card_footer{
  flex: 1 1 auto;
    padding: 1rem 1rem;

    background-color: rgba(51,51,51,0.8356384790244222);
    border-radius: 7px;

}
`
  ]
})
export class DettagliCarPage implements OnInit {


  product!: Product;
  sub!: Subscription;
  check = 0;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.router.params.subscribe((params: Params)=> {
      this.product = <Product>params;
      console.log(this.product);
      console.log(params );
       });
  }




  add() {

    prodotti.addToCart(this.product)
    // alert("Articolo aggiunto!")
    this.check += 1;
  }



  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }
}
