import { Component, OnInit } from '@angular/core';
import { getRoutes } from '../app-routing.module';
@Component({
  selector: 'app-mobile-wrapper',
  templateUrl: './mobile-wrapper.component.html',
  styleUrls: ['./mobile-wrapper.component.css']
})
export class MobileWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  routes(){
    return getRoutes();
  }
}
