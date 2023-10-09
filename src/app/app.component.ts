import { Component } from '@angular/core';
import { DoNothingService } from './do-nothing.service';
import { CustomerService } from './customer.service';
import { Customer } from './customer.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //DoNS: DoNothingService | null = null;//allows null//O2
  //DoNS!: DoNothingService;//O1
  about!:string;
  message:string = "";
  constructor(
    private DoNS: DoNothingService, 
    private CSVC: CustomerService
    )
  {
    //this.DoNS = DoNS;//O1
  }
  ngOnInit(): void {
    this.about = this.DoNS.about
    this.message = "";
    /*
    let C = new Customer();
    C.id = 4;
    C.code = "ZZZ";
    C.name = "CZ";
    C.sales = 10000;
    C.active = true;
    */

    this.CSVC.remove(4).subscribe({
      next: (res)=>{
        console.log(res);
      },
      error: (err)=>{
        if(err.status==404){
          this.message = "not found"
        }else{
          console.error(err);
        }
          
      }
    });
  }
}
