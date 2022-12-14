import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/layouts/cart/cart.component';
import { ContactComponent } from './components/layouts/contact/contact.component';
import { DetailComponent } from './components/layouts/detail/detail.component';
import { HomeComponent } from './components/layouts/home/home.component';
import { ShopComponent } from './components/layouts/shop/shop.component';
import { CheckoutcomponentComponent} from './components/layouts/checkoutcomponent/checkoutcomponent.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'pages/cart', component: CartComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'contact', component: ContactComponent },
  {path:'checkout',component: CheckoutcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
