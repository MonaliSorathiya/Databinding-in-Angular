import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  concept = 'assets/img/PB.PNG';
  title = 'One-Way Data Binding';
  withbind = 'with bind-value';
  enable = true;
  appStatus = true;
  appStatus2 = false;
  status1 = 'online';
  status2 = 'offline';
  constructor() { }

  ngOnInit(): void {
  }

}
