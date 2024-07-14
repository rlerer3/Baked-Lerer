// import { Component } from '@angular/core';
// import { EventEmitter, OnInit, Output } from '@angular/core';
// import { Bake } from '../models/bake';
// import { BAKED } from '../models/baked';

// @Component({
//   selector: 'app-search',
//   standalone: true,
//   imports: [],
//   templateUrl: './search.component.html',
//   styleUrl: './search.component.css'
// })
// export class SearchComponent {
//   bake:Bake[] = [];
//   search() {
//     if (this.searchText === '' || !this.searchText)
//     this.bake = BAKED;
//   else {
//     this.bake = BAKED;
//     this.bake = this.bake.filter(bake => bake.name?.startsWith(this.searchText.toLowerCase()));
//   }

//   }
//   reset() {
//     this.searchText = '';
//     this.bake = BAKED;
//   }
// }

import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input [(ngModel)]="searchText" (input)="onSearchTextChanged()" placeholder="Search" />
  `
})
export class SearchComponent {
  searchText: string = '';
  @Output() searchTextChanged = new EventEmitter<string>();

  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchText);
  }
}
