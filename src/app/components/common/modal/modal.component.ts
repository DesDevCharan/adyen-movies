import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ad-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  movie: any;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.openModal$.subscribe((id: string) => {
      this.api.getMovie(id).subscribe((resp) => {
        this.movie = resp;
      });
    });
  }

}
