
// import { Component, OnInit} from '@angular/core';
// import { OrderFormComponent } from '../order-form/order-form.component';
// import { Bake } from '../models/bake';
// import { CommonModule } from '@angular/common';
// import { DessertsService } from '../services/desserts.service';

// @Component({
//   selector: 'app-main-page',
//   standalone: true,
//   imports: [OrderFormComponent, CommonModule],
//   templateUrl: './main-page.component.html',
//   styleUrls: ['./main-page.component.css']
// })
// export class MainPageComponent implements OnInit {
//   baked:Bake[] = [];
//   message= "Welcome to Baked 4 Less";
//   searchText: string = '';
//   getDay = new Date();
//   myLink= 'https://www.facebook.com';

//   constructor(private dessertService:DessertsService) { }

//   ngOnInit(): void {
//       this.dessertService.getBaked().subscribe({
//         next: data => {
//           this.baked = data;
//         },
//         error: e => {
//           alert("Network Error !! Please Try Again Later");
//         }
//       });
//     }
  
//     onakeAdded(bake: Bake) {
//       this.baked.push(bake);
//     }
  
//     onSearchTextChanged(bakeName: string) {
//       this.dessertService.getBaked().subscribe({
//         next: data => {
//           if (bakeName || bakeName !== '') {
//             this.baked = data.filter(bake => bake.name?.toLowerCase().includes(bakeName.toLowerCase()));
//           }
//           else
//             this.baked = data;
//         },
//         error: e => {
//           alert("Network Error !! Please Try Again Later");
//         }
//       })
//     }
//   }
// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { OrderFormComponent } from '../order-form/order-form.component';
// import { Bake } from '../models/bake';
// import { DessertsService } from '../services/desserts.service';

// @Component({
//   selector: 'app-main-page',
//   standalone: true,
//   imports: [OrderFormComponent, CommonModule, FormsModule],
//   templateUrl: './main-page.component.html',
//   styleUrls: ['./main-page.component.css']
// })
// export class MainPageComponent implements OnInit {
//   baked: Bake[] = [];
//   message = "Welcome to Baked 4 Less";
//   searchText: string = '';
//   getDay = new Date();
//   myLink = 'https://www.facebook.com';

//   constructor(private dessertService: DessertsService) { }

//   ngOnInit(): void {
//     this.loadBakedGoods();
//   }

//   loadBakedGoods() {
//     this.dessertService.getBaked().subscribe({
//       next: data => {
//         this.baked = data;
//       },
//       error: e => {
//         alert("Network Error !! Please Try Again Later");
//       }
//     });
//   }

//   onBakeAdded(bake: Bake) {
//     this.baked.push(bake);
//   }

//   onSearchTextChanged(searchText: string) {
//     this.searchText = searchText;
//     this.loadBakedGoods(); 

//     if (this.searchText && this.searchText.trim() !== '') {
//       this.baked = this.baked.filter(bake => 
//         bake.name?.toLowerCase().includes(this.searchText.toLowerCase())
//       );
//     } else {
//       this.loadBakedGoods(); 
//     }
//   }

//   searchBake() {
//     if (this.searchText) {
//       this.baked = this.baked.filter(bake => 
//         bake.name?.toLowerCase().includes(this.searchText.toLowerCase())
//       );
//     } else {
//       this.loadBakedGoods(); 
//     }
//   }

//   reset() {
//     this.searchText = '';
//     this.loadBakedGoods();
//   }
// }
// }
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderFormComponent } from '../order-form/order-form.component';
import { Bake } from '../models/bake';
import { DessertsService } from '../services/desserts.service';
import { BakedCardsComponent } from '../baked-cards/baked-cards.component';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [OrderFormComponent, CommonModule, FormsModule, BakedCardsComponent],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  baked: Bake[] = [];
  message = "Welcome to Baked 4 Less";
  searchText: string = '';
  getDay = new Date();
  myLink = 'https://www.facebook.com';

  constructor(private dessertService: DessertsService) { }

  ngOnInit(): void {
    this.loadBakedGoods();
  }

  loadBakedGoods() {
    this.dessertService.getBaked().subscribe({
      next: data => {
        this.baked = data.map(item => ({
          ...item,
          price: Number(item.price)
        }));
      },
      error: e => {
        alert("Network Error !! Please Try Again Later");
      }
    });
  }

  onBakeAdded(bake: Bake) {
    this.baked.push(bake);
  }

  onSearchTextChanged(searchText: string) {
    this.searchText = searchText;
    this.loadBakedGoods(); 

    if (this.searchText && this.searchText.trim() !== '') {
      this.baked = this.baked.filter(bake =>
        bake.name?.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.loadBakedGoods(); 
    }
  }

  searchBake() {
    if (this.searchText) {
      this.baked = this.baked.filter(bake =>
        bake.name?.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.loadBakedGoods(); 
    }
  }

  reset() {
    this.searchText = '';
    this.loadBakedGoods();
  }
}
