
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '../app/main-page/main-page.component';
import { AboutComponent } from '../app/about/about.component';
import { ContactUsComponent } from '../app/contact-us/contact-us.component';
import { ShoppingCartComponent } from '../app/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: 'home', component: MainPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
