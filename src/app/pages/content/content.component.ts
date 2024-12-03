import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/Services/auth.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  constructor(private _AuthServies:AuthService ){}
  
  searchInput:string=''
 
   
   resultUser:any=[]
   count:number=1;
   totalUserss:Number=0
      ngOnInit(): void{
      this.GetAllUser()
}
navigateToAnotherPage() {
  this.count++;
  this._AuthServies.GetUsers(this.count,10).subscribe((response) =>{
    this.resultUser=response.users})

}
GetAllUser(){
  
  this._AuthServies.GetUsers().subscribe((response)=>{
    this.totalUserss=response.totalUsers;
    this.resultUser=response.users;
    console.log(this.resultUser)
  })
 }
navigateToPreviosPage(){
  this.count--;
  this._AuthServies.GetUsers(this.count,10).subscribe((response) =>{
    this.resultUser=response.users})
}
search():void{

   this._AuthServies.Search(this.searchInput).subscribe((res)=>{
   
  this.resultUser=res.users;
   })
}
}
