
import { Component, OnInit, NgModule} from '@angular/core';
import { OrderFormComponent } from '../order-form/order-form.component';
import { Bake } from '../models/bake';
import { BAKED } from '../models/baked';
import { CommonModule } from '@angular/common';
import { DessertsService } from '../services/desserts.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [OrderFormComponent, CommonModule],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  baked:Bake[] = [];
  searchText: string = '';
  constructor(private dessertService:DessertsService) { }

  ngOnInit(): void {
      this.dessertService.getBaked().subscribe({
        next: data => {
          this.baked = data;
        },
        error: e => {
          alert("Network Error !! Please Try Again Later");
        }
      });
    }
  
    onFruitAdded(bake: Bake) {
      this.baked.push(bake);
    }
  
    onSearchTextChanged(fruitName: string) {
      this.dessertService.getBaked().subscribe({
        next: data => {
          if (bakeName || bakeName !== '') {
            this.baked = data.filter(bake => bake.name?.toLowerCase().includes(bakeName.toLowerCase()));
          }
          else
            this.baked = data;
        },
        error: e => {
          alert("Network Error !! Please Try Again Later");
        }
      })
    }
  }
  