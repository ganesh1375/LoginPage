import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // constructor() { }
  constructor(private _http: HttpClient) { }
  ngOnInit(): void {
    
    $(document).ready(() => {
      //alert('I am Called From jQuery');
      // $(window).on("load", function () {
        $(".loader-wrapper").fadeOut(5000);
      //});
    });
  }
  submitted: any = false;
  hasError: any = false;


  topics = ['Angular', 'React', 'Vue'];

  // userModel=new User('','',8008704548,'','morning',true);

  form: any;
  onSubmit(userForm: any) {
    this.submitted = true;
    console.log(userForm);
    // this.getData().subscribe(data=>{
    //   console.log(data);
    //   this.form=data;
    // });
    this.enroll(userForm).subscribe((data: any) => console.log("success", data));
  }


  confirm(value1: any, value2: any) {
    if (value1 === value2) {
      this.hasError = false;
      console.log("No Nothing");
    }
    else {
      this.hasError = true;
      console.log("Yeah Something");

    }
  }


  getData(): Observable<any> {
    return this._http.get('http://localhost:8000/form');
  }

  enroll(user: any): Observable<any> {
    return this._http.post('http://localhost:8000/form', user);
  }


}
