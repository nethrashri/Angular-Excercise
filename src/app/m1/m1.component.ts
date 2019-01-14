import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { from } from 'rxjs';
import 'rxjs/add/operator/timeout'




//import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';


@Component({
  selector: 'app-m1',
  templateUrl: './m1.component.html',
  styleUrls: ['./m1.component.css']
})
export class M1Component implements OnInit {
loginReq:any={};
loginurl: string;
loginRes: any={};
  constructor(public snackBar: MatSnackBar,public http:HttpClient, public router: Router, private spinner: NgxSpinnerService) { }



  ngOnInit() {
    console.log("Came  inside M1");
    
   
  }
//     var i = 1;
//     {
//     for(let i = 0; i<10; i++)

// console.log(i*2);

    
//   }

  login() {
    this.spinner.show();
 
    this.loginurl= 'http://192.168.0.114:10010/login';
    this.http.post(this.loginurl,this.loginReq)
    .timeout(200)
    .subscribe(res =>{

      // setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();

        console.log(res);
        this.loginRes= res;
        if (this.loginRes.status == 'success')
        {
          this.router.navigate (['m2']);
        }
        else
        {     this.snackBar.open(this.loginRes.status , 'Error', {
          duration: 2000,
        });
    }

//    }, 5000);

     
    }), ()=>{
      console.log("inside error");
      this.snackBar.open("Error in Backed" , 'Error', {
        duration: 2000,
      });
    }
    
   console.log("login id is " + this.loginReq.id);
   console.log("password is " + this.loginReq.pwd);

  }

  Qualification = new FormControl();
  QualificationList: string[] = ['BCA', 'B.E', 'Bsc', 'MCA', 'MBA', 'M.E', 'M.Tech'];

}


