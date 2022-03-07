import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-filter',
  templateUrl: './notification-filter.component.html',
  styleUrls: ['./notification-filter.component.css']
})
export class NotificationFilterComponent implements OnInit {
  public show:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  toggle_pop() {
    this.show = !this.show;
  }

  hide_toggle_pop(): void {
    this.show = !this.show;
  }
}
