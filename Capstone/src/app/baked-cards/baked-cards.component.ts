import { Component, Input, OnInit} from '@angular/core';
import { Bake } from '../models/bake';
import { MatCardModule } from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-baked-cards',
  standalone: true,
  imports: [MatCardModule, MatRippleModule, MatIconModule],
  templateUrl: './baked-cards.component.html',
  styleUrl: './baked-cards.component.css'
})
export class BakedCardsComponent {
  @Input()
  bake?: Bake;
  constructor() { }
}

