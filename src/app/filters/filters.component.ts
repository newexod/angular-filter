import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() onFilterEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  filter(data: any): void {
    this.onFilterEmitter.emit(data);
  }

}
