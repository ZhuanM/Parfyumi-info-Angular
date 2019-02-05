import { Component, OnInit } from '@angular/core';
import { Fragrance } from '../models/fragrance';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-fragrance-modal',
  templateUrl: './fragrance-modal.component.html',
  styleUrls: ['./fragrance-modal.component.css']
})
export class FragranceModalComponent implements OnInit {

  public fragrance: Fragrance;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
