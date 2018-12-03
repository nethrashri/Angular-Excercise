import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m2',
  templateUrl: './m2.component.html',
  styleUrls: ['./m2.component.css']
})
export class M2Component implements OnInit {

  constructor() { }

  ngOnInit() {

let a = 2;
let b;

for (let i =1; i<=10; i++)
{
    let b = 2*i;
console.log(a + "*" + i + "=" + b);
}
  }
}
