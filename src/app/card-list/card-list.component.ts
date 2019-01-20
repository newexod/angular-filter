import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cards: any[];
  @Input() data: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    if (localStorage.filteredCards) {
      this.cards = JSON.parse(localStorage.filteredCards);
    } else {
      this.cards = this.dataService.getMockData();
      
      localStorage.cards = JSON.stringify(this.cards)
    }
  }

}
