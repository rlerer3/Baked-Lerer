
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
