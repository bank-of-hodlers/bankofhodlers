import { Component, OnInit, HostListener } from '@angular/core';
import { AboutText } from "../about";
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  supportActive: boolean = false;
  hsWidget: any;
  isLoading = false;

  constructor(  public router: Router ) { }
  
  dyna = AboutText;

  ngOnInit() {
    // @ts-ignore
    if (window.HubSpotConversations) {
      // @ts-ignore
      this.hsWidget = window.HubSpotConversations.widget;
    } else {
      // @ts-ignore
      window.hsConversationsOnReady = [
        () => {
          // @ts-ignore
          this.hsWidget = window.HubSpotConversations.widget;
        },
      ];
    }
  }

  linkGetter(){
    // window.scrollTo(0,0)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
//     let listArray: string[] = ['/','/about','/enterprise','/faq','/telegram','/fee','/market']
//     for (let entry of listArray) {
//       document.getElementById(entry).classList.remove("active");
//     }
//     switch(this.router.url){
//       case '/': document.getElementById('/').className += " active";
//               break;
//       case '/about': document.getElementById('/about').className += " active";
//               break;
//       case '/enterprise': document.getElementById('/enterprise').className += " active";
//               break;
//       case '/faq': document.getElementById('/faq').className += " active";
//               break;
//       case '/telegram': document.getElementById('/telegram').className += " active";
//               break;
//       case '/fee': document.getElementById('/fee').className += " active";
//               break;
//       case '/market': document.getElementById('/market').className += " active";
//               break;
//       default:break;
//     }
  }

  @HostListener('window:scroll', ['$event'])
  handleKeyDown(event: MouseEvent) {
    if(window.scrollY>0){
      document.getElementById("main_nav").style.background = "white"
    }
    else{
      document.getElementById("main_nav").style.background = "transparent"
    }
  }

  isLoadingChecker(){ 
    var count = 0
    var interval = setInterval(() =>{
      count++
      // console.log(count);
      var element =  document.getElementById("hubspot-conversations-inline-parent");
      if (element)
      {
        this.isLoading = false;
        clearInterval(interval)
      }
      else if(count == 5000){
        // console.log("Timeout");
        this.isLoading = false;
        this.supportActive = false;
        this.hsWidget.close();
        this.hsWidget.remove();
        clearInterval(interval)
      }
    })
  }


  hubspotInit(){
    // To do code
    // console.log("isLoading : " + this.isLoading)
    if(!this.isLoading){
      // console.log("supportActive : " + this.supportActive)
      if(this.supportActive) {
        this.supportActive = false;
        this.hsWidget.remove();
        // this.hsWidget.load({widgetOpen: false});
      }else {
        this.isLoading = true;
        this.isLoadingChecker()
        setTimeout(() => {
          const status = this.hsWidget.status();
          // console.log("status : "+status.loaded)
          if(!status.loaded) {
            this.supportActive = true;
            this.hsWidget.load({widgetOpen: true});
          }
        })
      }
    }
    else{
      // this.hsWidget.load({widgetOpen: false});
    }

  }
  

}
