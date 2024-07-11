
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
  baked = {
    id: '',
    name: '',
    price: null,
    unit: ''
  };

  onSubmit() {
    console.log('Order Submitted:', this.baked);
    this.resetForm();
  }

  resetForm() {
    this.baked = {
      id: '',
      name: '',
      price: null,
      unit: ''
    };
  }
}
