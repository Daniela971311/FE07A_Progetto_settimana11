import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import * as prodotti from '../products.service';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  template: `
<h1>Riepilogo:</h1>

   <div class="container-fluid elenco">
      <div class="row">
      <div class="mb-3 col-sm-3 trueE" *ngFor="let product of marketProducts">
        <div class="card-body ">
        <button type="button" class="btn-close btn2 bg-light" (click)="remove(product)"></button>
          <h5 class="card-title">{{product.name}}</h5>
          <p class="card-text">{{product.description}} </p>
          <br>
          <p> {{product.price | currency: 'EUR'}}</p>

        </div>
       </div>
    </div>
  </div>
<h3 class="text-center">Importo totale: {{importoTotale}}€</h3>
<div class="text-center">  <button type="button" class="btn centra1 m-3 bg-light " [routerLink]="['/']">Torna al negozio</button></div>

  <div class="container form ">

    <h2>Completa il tuo ordine</h2>

    <form (ngSubmit)="submit()" #f="ngForm">
      <div ngModelGroup="userInfo">
        <div class="form-group">
          <label for="name">Nome</label>
          <input type="text" class="form-control" ngModel name="nome" required #name="ngModel">
          <p class="errore" *ngIf="name.invalid">* Compila il campo! *</p>
          <label for="indirizzo">Indirizzo</label>
          <input type="text" class="form-control" ngModel name="indirizzo" required #indirizzo="ngModel">
          <p  class="errore" *ngIf="indirizzo.invalid">* Compila il campo! *</p>
          <input type="submit" [disabled]="f.invalid" value="invia" class="btn btn-dark mt-3">
        </div>
      </div>
    </form>
  </div>

  `,
  styles: [`
  *{font-family: 'Merriweather', serif;}
    input.ng-invalid.ng-touched {
      border: 2px solid red;
    }
    h1{
  font-size:30px;
  margin-left:20px;
  margin-top: 9px;
}
.centra1{
  align-items:center;
}
    .row{
      display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;



    }
    div.elenco{
  flex: 1 1 auto;
    padding: 1rem 1rem;
      width:60vw;
      background-color: rgb(203 203 203 / 26%);
    border-radius: 14px;

}
div.trueE{
  width: 48vw;
  background: #2b2a2ae0;
    border-radius: 16px;
}
.btn2{
  position: relative;
    left: 36rem;
}
.btn{
  background-color:black;
}
h5{
  font-size: 2.5rem;
}

    .form {
      background-color: rgba(51,51,51,0.8356384790244222);
      margin-top: 10px;
      margin-bottom: 100px;
      border-radius:30px;
      padding: 1em;
      width: 60vw;


    }
    .errore{
      color:red;
      margin-top:5px;
      font-size:10px;
    }
    .card-body{
      width:90%!important;
    }
    .importoTotale{
      margin-top:15px;
      margin-left: 15px;
      font-size: 20px;
    }
  `],
})

export class CarrelloPage implements OnInit {
  product!: Product;

  marketProducts: Product[]= prodotti.cart;
  importoTotale:number = 0;
  @ViewChild("f", {static:true}) form!:NgForm;

  user:any= {};

  submit(){
    console.log('form inviato', this.form);
    this.user.nome = this.form.value.userInfo.nome;
    this.user.indirizzo = this.form.value.userInfo.indirizzo;

    let summary = [];

    for (let i of this.marketProducts) {
      if(summary.length > 0) {
        summary.push(" " + i.name);
      }else {
        summary.push(i.name);
      }
    }


  if(prodotti.cart.length>0) {
    alert("La tua ricevuta d'acquisto \n" +
    "Numero Ordine: #" +
    Math.floor(Math.random()* 200000) +
    "\n" +
    "Nome utente: " +
    this.user.nome +
    "\n" +
    "Indirizzo: " +
    this.user.indirizzo +
    "\n" +
    summary
    );
  }else {
    alert("Aggiungi prima qualcosa al carrello!")
  }

  prodotti.cart.length=0;
  this.form.reset()
}

remove(product:Product){
  prodotti.removeToCart(product);
  this.marketProducts=prodotti.cart;
  this.importoTotale-=product.price;
}

  constructor() { }

  ngOnInit(): void {
    for(let i of this.marketProducts ){
      this.importoTotale+= Number(i.price);
}
  }

}
