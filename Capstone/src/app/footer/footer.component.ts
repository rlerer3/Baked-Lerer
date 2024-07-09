import { Component } from '@angular/core';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ContactUsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
