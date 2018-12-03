import { Component, OnInit } from '@angular/core';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

@Component({
  selector: 'app-m1',
  templateUrl: './m1.component.html',
  styleUrls: ['./m1.component.css']
})
export class M1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("Came  inside M1");
    
    var i = 1;
    {
    for(let i = 0; i<10; i++)

console.log(i);

    }
  }
}
