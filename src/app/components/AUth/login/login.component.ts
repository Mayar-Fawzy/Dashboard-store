
  import { Component } from '@angular/core';
  import { Router } from '@angular/router';
  import { FormControl, FormGroup, Validators } from '@angular/forms';
  import {jwtDecode} from 'jwt-decode';

import { ServService } from '../../../core/Services/serv.service';

import { ToastService } from '../../../core/Services/toast.service';


  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  })
  export class LoginComponent {
    errorr:string='';
    isloading = false;
    constructor(private _ServService:ServService  ,private _router:Router,private _ToastService:ToastService){}
    LoginForrm:FormGroup=new FormGroup({
       
       
        email:new FormControl(null ,[Validators.required,Validators.email]),
        password:new FormControl(null ,[Validators.required, Validators.pattern(/^[A-Z0-9a-z]{6,}/)]),
       
       })
       SubmitLogin(forminfo:FormGroup)
       {
        this.isloading=true;
        const email = forminfo.value.email;
        const password = forminfo.value.password;
        if (email == "mayaraAdmin300@gmail.com" && password =="Mostafa@300") {
          this._ServService.Login(forminfo.value).subscribe((res) => {
            if (res.message === "success") {
              this.isloading=false;
              this._ToastService.showToast("success", "تم التسجيل الدخول بنجاح");
              localStorage.setItem("userToken", res.token);
              this._ServService.DecodeUser();
              this._router.navigate(['/home']);
            } 
          },
            (error) => {
              console.log(error);
              this.isloading=false;
              this._ToastService.showToast ("error" ,error.error.message);        
             
          })
        }
        else {
          console.log(this.errorr);
          this.isloading=false;
          this._ToastService.showToast("error", "هذا الايميل ليس لديه الصلاحيات لدخول");
    
        }
       
      }
      
    
    
      
    
    
  }