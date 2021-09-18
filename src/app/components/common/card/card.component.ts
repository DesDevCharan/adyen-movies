import { ApiService } from './../../../services/api.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ad-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() data: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  openModal() {
    this.api.emitOpenModal(this.data.imdbID);
  }
}
