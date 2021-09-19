import { ApiService } from './../../../services/api.service';
import { Component, OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'ad-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  open = false;
  searchTerm: string = null;
  @ViewChildren('input') vc;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  toggleSearch() {
    if (this.open && this.searchTerm) {
      this.api.emitSearchTerm(this.searchTerm);
    }
    this.open = !this.open;
    this.vc.first.nativeElement.focus();
  }
}
