import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarrelloPage } from './pages/carrello.page';
import { DettagliCarPage } from './pages/dettagli-car.page';
import { MarketPage } from './pages/market.page';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path: '',
    component: MarketPage,
  },
  {
    path:'cart',
    component: CarrelloPage,
  },
  {
    path:'dettagli',
    component: DettagliCarPage,
    children:
    [{
      path: 'cart',
      component: CarrelloPage
    }]
  }

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarrelloPage,
    DettagliCarPage,
    MarketPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
