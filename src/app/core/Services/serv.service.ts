import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class ServService {
  userData=new BehaviorSubject(null);
  baseUrl:string=`https://ecommerce.routemisr.com/api/v1/auth`
  constructor(private _HttpClient:HttpClient) {
    if(localStorage.getItem('userToken')!=null){
        //لسه في داتا ف ال localstorgeكده لسه في متعملش ريفرش لان اول ما الصفحه تحمل ال كونستراكتور بيشتغل داتا
        this.DecodeUser() 
    }
   }
   
   DecodeUser() {
    const encode = localStorage.getItem("userToken");
    if (encode != null) {
      const decoded:any = jwtDecode(encode);
      this.userData.next(decoded)

    }
      
  }

  Login(userdata:any):Observable<any>
  {
    return  this._HttpClient.post(`${this.baseUrl}/signin`,userdata)
  }

}
