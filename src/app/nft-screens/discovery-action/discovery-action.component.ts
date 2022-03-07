import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discovery-action',
  templateUrl: './discovery-action.component.html',
  styleUrls: ['./discovery-action.component.css']
})
export class DiscoveryActionComponent implements OnInit {

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
