import { Component, OnInit, Input } from '@angular/core';
import { Fragrance } from '../models/fragrance';

@Component({
  selector: 'app-fragrance',
  templateUrl: './fragrance.component.html',
  styleUrls: ['./fragrance.component.css']
})
export class FragranceComponent implements OnInit {
  @Input() fragInfo: Fragrance;
  constructor() { }

  ngOnInit() {
  }

}