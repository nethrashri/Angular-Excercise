import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


//import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';


@Component({
  selector: 'app-m1',
  templateUrl: './m1.component.html',
  styleUrls: ['./m1.component.css']
})
export class M1Component implements OnInit {
loginReq:any={};
loginurl: string
  constructor(public snackBar: MatSnackBar,public http:HttpClient) { }



  ngOnInit() {
    console.log("Came  inside M1");
    
//     var i = 1;
//     {
//     for(let i = 0; i<10; i++)

// console.log(i*2);

    }
//   }

  login() {

    this.loginurl= 'http://192.168.0.114:10010/login';
    this.http.post(this.loginurl,this.loginReq).subscribe(res =>{
      console.log(res)
    }), ()=>{
    
    }
    
   console.log("login id is " + this.loginReq.username);
   console.log("password is " + this.loginReq.password);

  }

  Qualification = new FormControl();
  QualificationList: string[] = ['BCA', 'B.E', 'Bsc', 'MCA', 'MBA', 'M.E', 'M.Tech'];

}


