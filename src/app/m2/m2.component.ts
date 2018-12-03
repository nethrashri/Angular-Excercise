import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m2',
  templateUrl: './m2.component.html',
  styleUrls: ['./m2.component.css']
})
export class M2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    b = [];

for (let i = 0; i < a.length; ++i) { 
if ((a[i] % 2) === 0) {
    b.push(a[i]);
}
}
  }

}
