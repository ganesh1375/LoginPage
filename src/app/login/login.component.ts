import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _http: HttpClient) { }
  fetchingData() {
    return true;
  }


  ngOnInit(): void {
    $(document).ready(() => {
      //alert('I am Called From jQuery');
      // $(window).on("load", function () {
      $(".loader-wrapper").fadeOut(5000);
      //});
    });

  }

  email: any;
  userDetails: any;
  password: any;
  result: any;
  displayUserDetails: any = false;
  invalidEmail: any = false;
  onSubmit(login: any) {
    this.email = login.value.email;
    //console.log(this.email);
    this.getData().subscribe(data => {
      this.userDetails = data;
      console.log(this.userDetails);
      // console.log("first");
      if (this.userDetails != null) {
        this.invalidEmail = false;
        this.password = this.userDetails.password;
        console.log(this.password);
        if (this.password === login.value.password) {
          console.log("Yes Suceessfull");
          this.displayUserDetails = true;
        }
        else {

          console.log("NO Not Possible");
        }
      }
      else {
        this.invalidEmail = true;
        console.log("user not Found!!!");

      }
    });



  }

  getData(): Observable<any> {
    return this._http.get(`http://localhost:8000/form/${this.email}`);
  }

  dnone() {
    this.invalidEmail = false;
  }





}
