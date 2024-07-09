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

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  bakeName: string = "";

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  searchBake() {    
    this.searchTextChanged.emit(this.bakeName);
  }

}
