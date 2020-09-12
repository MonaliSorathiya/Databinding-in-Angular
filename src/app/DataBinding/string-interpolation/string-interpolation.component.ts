import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  title = 'One-Way Data Binding';
  concept = 'assets/img/string2.png';
  appStatus = true;
  appStatus2 = false;
  status1 = 'online';
  status2 = 'offline';
  constructor() { }

  ngOnInit(): void {
  }

  myMethod(): string{
    return 'String Interpolation used for ' + this.title;
  }

}
