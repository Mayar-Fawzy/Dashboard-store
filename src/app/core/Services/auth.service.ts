import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/Environment/environment';
import { Iuser } from '../Interface/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData=new BehaviorSubject(null);

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

  Login(userdata:Iuser):Observable<any>
  {
    return  this._HttpClient.post(`${environment.baseUrl}${environment.LoginRout}`,userdata)
  }
  GetUsers(page:number=1, limit:number=10):Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}${environment.UserRout}?limit=${limit}&page=${page}`)
  }
  Search(searchinput:string):Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}${environment.UserRout}?name=${searchinput}`)
  }
}
