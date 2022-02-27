import { Component, OnInit } from '@angular/core';
import { cart } from '../products.service';

@Component({
  selector: 'app-navbar',
  templateUrl:'./navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
carNav = cart
  constructor() { }

  ngOnInit(): void {
  }

}
