import { Product } from './common/Product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product : Product = {
    name: "hat",
    quantity: 200,
    price: 500
  }
}
