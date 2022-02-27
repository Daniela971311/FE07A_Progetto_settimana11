import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as prodotti from './products.service';


@Component({
  selector: 'app-root',
  template: `
   <app-navbar></app-navbar>
   <router-outlet></router-outlet>




  `,
  styles: [`


    `]
})
export class AppComponent {
  title = 'FE07A_progetto_S11';
  loading : boolean = false;

  constructor(public http:HttpClient){}


ngOnInit(): void {
  prodotti.loadProducts(this.http);
}


}

