import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StatuscheckerService {

  constructor( public router: Router, ) { }

  onRefreashUrlChecker(){
//     let listArray: string[] = ['/','/about','/enterprise','/faq','/telegram','/market','/fee']
    let listArray: string[] = ['/','/about','/enterprise','/faq','/telegram','/fee']
    for (let entry of listArray) {
      document.getElementById(entry).classList.remove("active");
    }
    
    var curentUrl = this.router.url.split('?')[0]
    switch(curentUrl){
      case '/': document.getElementById('/').className += " active";
              break;
      case '/home': document.getElementById('/').className += " active";
              break;
      case '/about': document.getElementById('/about').className += " active";
              break;
      case '/enterprise': document.getElementById('/enterprise').className += " active";
              break;
      case '/faq': document.getElementById('/faq').className += " active";
              break;
//       case '/telegram': document.getElementById('/telegram').className += " active";
//               break;
      case '/fee': document.getElementById('/fee').className += " active";
              break;
      case '/market': document.getElementById('/market').className += " active";
              break;
      default:break;
    }
  }
}
