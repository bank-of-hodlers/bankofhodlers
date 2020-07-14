import { Component, OnInit, HostListener} from '@angular/core';
import { ApiText } from "../api";
import { Title } from '@angular/platform-browser';
import { StatuscheckerService } from '../statuschecker.service'
import { Scroll } from '@angular/router';


@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.css']
})
export class EnterpriseComponent implements OnInit {

  isNotEmail = false;
  previousSection = "wallets";
  isSkip = false;
  isSticky: boolean = false;
  email_notification_text :string = "Sorry please enter proper email address!"

  constructor( public apiText : ApiText, public statusCheck :StatuscheckerService, public titleService : Title ) { }

  ngOnInit() {
        this.statusCheck.onRefreashUrlChecker();
        this.titleService.setTitle('Enterprise APIs - Bank of Hodlers');
        document.getElementById("bubbleOneRing").style.border = "1px solid #1E90FF";
  }

  sideNavAnimate(percen, tag){
    let listArray: string[] = ['wallets','lending','borrow','inr','credit','pricing','partner']
    this.isSkippingSection(listArray, tag)
//     console.log(tag + this.isSkip)
    this.previousSection = tag
    for (let entry of listArray) {
      document.getElementById(entry).classList.remove("select");
    }
    switch(tag){
      case 'wallets': document.getElementById(tag).className += " select";
              break;
      case 'lending': document.getElementById(tag).className += " select";
              break;
      case 'borrow': document.getElementById(tag).className += " select";
              break;
      case 'inr': document.getElementById(tag).className += " select";
              break;
      case 'credit': document.getElementById(tag).className += " select";
              break;
      case 'pricing': document.getElementById(tag).className += " select";
              break;
      case 'partner': document.getElementById(tag).className += " select";
              break;
      default:break;
    }
    switch(percen){
        case "1":
                document.getElementById("gradDown").style.height = "0%";
                document.getElementById("gradUp").style.height = "100%";
                document.getElementById("bubbleOneRing").style.border = "1px solid #1E90FF";
                document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
                document.getElementById("bubbleThreeRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFourRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFiveRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSixRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSevenRing").style.border = "1px solid #eae9e9";

                
                document.getElementById("bubbleOne").style.background = "#1E90FF";
                document.getElementById("bubbleTwo").style.background = "#4FA6FC";
                document.getElementById("bubbleThree").style.background = "#8DC0F8";
                document.getElementById("bubbleFour").style.background = "#94C5FF";
                document.getElementById("bubbleFive").style.background = "#ABCEF7";
                document.getElementById("bubbleSix").style.background = "#CADCF5";
                document.getElementById("bubbleSeven").style.background = "#E3E6F3";
                if(document.documentElement.offsetWidth <= 1440 && document.documentElement.offsetWidth > 1280){
                        document.getElementById("bubbleOne").style.top = "-1%";
                        document.getElementById("bubbleTwo").style.top = "17%";
                        document.getElementById("bubbleThree").style.top = "33%";
                        document.getElementById("bubbleFour").style.top = "49%";
                        document.getElementById("bubbleFive").style.top = "66%";
                        document.getElementById("bubbleSix").style.top = "82%";
                        document.getElementById("bubbleSeven").style.top = "98%";
                      }
                      else if(document.documentElement.offsetWidth <= 1280){
                        document.getElementById("bubbleOne").style.top = "0%";
                        document.getElementById("bubbleTwo").style.top = "18%";
                        document.getElementById("bubbleThree").style.top = "34%";
                        document.getElementById("bubbleFour").style.top = "50%";
                        document.getElementById("bubbleFive").style.top = "66%";
                        document.getElementById("bubbleSix").style.top = "82%";
                        document.getElementById("bubbleSeven").style.top = "98%";
                      }
                      else{
                        document.getElementById("bubbleOne").style.top = "-1%";
                        document.getElementById("bubbleTwo").style.top = "16%";
                        document.getElementById("bubbleThree").style.top = "33%";
                        document.getElementById("bubbleFour").style.top = "49%";
                        document.getElementById("bubbleFive").style.top = "65%";
                        document.getElementById("bubbleSix").style.top = "81%";
                        document.getElementById("bubbleSeven").style.top = "98%";
                      }
                break;
        case "2":
                document.getElementById("gradDown").style.height = "18%";
                document.getElementById("gradUp").style.height = "82%";
                document.getElementById("bubbleOneRing").style.border = "1px solid transparent";
                document.getElementById("bubbleTwoRing").style.border = "1px solid #1E90FF";
                document.getElementById("bubbleThreeRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFourRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFiveRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSixRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSevenRing").style.border = "1px solid #eae9e9";

                document.getElementById("bubbleOne").style.background = "#EEF0F8";

                document.getElementById("bubbleTwo").style.background = "#1E90FF";
                document.getElementById("bubbleThree").style.background = "#7CB9F9";
                document.getElementById("bubbleFour").style.background = "#A2CAF7";
                document.getElementById("bubbleFive").style.background = "#C5D9F5";
                document.getElementById("bubbleSix").style.background = "#CADCF5";

                document.getElementById("bubbleSeven").style.background = "#E3E6F3";
                if(document.documentElement.offsetWidth <= 1440 && document.documentElement.offsetWidth > 1280){
                        document.getElementById("bubbleOne").style.top = "-1%";
                        document.getElementById("bubbleTwo").style.top = "15%";
                        document.getElementById("bubbleThree").style.top = "33%";
                        document.getElementById("bubbleFour").style.top = "49%";
                        document.getElementById("bubbleFive").style.top = "66%";
                        document.getElementById("bubbleSix").style.top = "82%";
                        document.getElementById("bubbleSeven").style.top = "98%";
                      }
                      else if(document.documentElement.offsetWidth <= 1280){
                        document.getElementById("bubbleOne").style.top = "0%";
                        document.getElementById("bubbleTwo").style.top = "16%";
                        document.getElementById("bubbleThree").style.top = "34%";
                        document.getElementById("bubbleFour").style.top = "50%";
                        document.getElementById("bubbleFive").style.top = "66%";
                        document.getElementById("bubbleSix").style.top = "82%";
                        document.getElementById("bubbleSeven").style.top = "98%";
                      }
                      else{
                        document.getElementById("bubbleOne").style.top = "-1%";
                        document.getElementById("bubbleTwo").style.top = "16%";
                        document.getElementById("bubbleThree").style.top = "33%";
                        document.getElementById("bubbleFour").style.top = "49%";
                        document.getElementById("bubbleFive").style.top = "65%";
                        document.getElementById("bubbleSix").style.top = "81%";
                        document.getElementById("bubbleSeven").style.top = "98%";
                      }
                break;
        case "3":
                document.getElementById("gradDown").style.height = "33%";
                document.getElementById("gradUp").style.height = "67%";
                document.getElementById("bubbleOneRing").style.border = "1px solid transparent";
                document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
                document.getElementById("bubbleThreeRing").style.border = "1px solid #1E90FF";
                document.getElementById("bubbleFourRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFiveRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSixRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSevenRing").style.border = "1px solid #eae9e9";

                // document.getElementById("bubbleOne").style.top = "-6px";
                document.getElementById("bubbleOne").style.background = "#EEF0F8";
                // document.getElementById("bubbleTwo").style.top = "30px";
                document.getElementById("bubbleTwo").style.background = "#8DC0F8";
                document.getElementById("bubbleThree").style.top = "31%";
                document.getElementById("bubbleThree").style.background = "#1E90FF";
                // document.getElementById("bubbleFour").style.top = "107px";
                document.getElementById("bubbleFour").style.background = "#64AFFB";
                // document.getElementById("bubbleFive").style.top = "107px";
                document.getElementById("bubbleFive").style.background = "#A2CAF7";
                // document.getElementById("bubbleSix").style.top = "107px";
                document.getElementById("bubbleSix").style.background = "#BDD6F6";
                // document.getElementById("bubbleSeven").style.top = "107px";
                document.getElementById("bubbleSeven").style.background = "#E3E6F3";
                if(document.documentElement.offsetWidth <= 1440 && document.documentElement.offsetWidth > 1280){
                        document.getElementById("bubbleOne").style.top = "-1%";
                        document.getElementById("bubbleTwo").style.top = "16%";
                        document.getElementById("bubbleThree").style.top = "32%";
                        document.getElementById("bubbleFour").style.top = "50%";
                        document.getElementById("bubbleFive").style.top = "66%";
                        document.getElementById("bubbleSix").style.top = "82%";
                        document.getElementById("bubbleSeven").style.top = "98%";
                      }
                      else if(document.documentElement.offsetWidth <= 1280){
                        document.getElementById("bubbleOne").style.top = "0%";
                        document.getElementById("bubbleTwo").style.top = "16%";
                        document.getElementById("bubbleThree").style.top = "32%";
                        document.getElementById("bubbleFour").style.top = "50%";
                        document.getElementById("bubbleFive").style.top = "66%";
                        document.getElementById("bubbleSix").style.top = "82%";
                        document.getElementById("bubbleSeven").style.top = "98%";
                      }
                      else{
                        document.getElementById("bubbleOne").style.top = "-1%";
                        document.getElementById("bubbleTwo").style.top = "15%";
                        document.getElementById("bubbleThree").style.top = "31%";
                        document.getElementById("bubbleFour").style.top = "49%";
                        document.getElementById("bubbleFive").style.top = "65%";
                        document.getElementById("bubbleSix").style.top = "81%";
                        document.getElementById("bubbleSeven").style.top = "98%";
                      }
                break;
        case "4":
                document.getElementById("gradDown").style.height = "49%";
                document.getElementById("gradUp").style.height = "51%";
                document.getElementById("bubbleOneRing").style.border = "1px solid transparent";
                document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
                document.getElementById("bubbleThreeRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFourRing").style.border = "1px solid #1E90FF";
                document.getElementById("bubbleFiveRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSixRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSevenRing").style.border = "1px solid #eae9e9";

                // document.getElementById("bubbleOne").style.top = "-6px";
                document.getElementById("bubbleOne").style.background = "#E3E6F3";
                // document.getElementById("bubbleTwo").style.top = "30px";
                document.getElementById("bubbleTwo").style.background = "#CADCF5";
                // document.getElementById("bubbleThree").style.top = "66px";
                document.getElementById("bubbleThree").style.background = "#73B5FA";
                document.getElementById("bubbleFour").style.top = "48%";
                document.getElementById("bubbleFour").style.background = "#1E90FF";
                // document.getElementById("bubbleFive").style.top = "107px";
                document.getElementById("bubbleFive").style.background = "#73B5FA";
                // document.getElementById("bubbleSix").style.top = "107px";
                document.getElementById("bubbleSix").style.background = "#CADCF5";
                // document.getElementById("bubbleSeven").style.top = "107px";
                document.getElementById("bubbleSeven").style.background = "#E3E6F3";
                if(document.documentElement.offsetWidth <= 1440 && document.documentElement.offsetWidth > 1280){
                        document.getElementById("bubbleOne").style.top = "-1%";
                        document.getElementById("bubbleTwo").style.top = "16%";
                        document.getElementById("bubbleThree").style.top = "32%";
                        document.getElementById("bubbleFour").style.top = "48%";
                        document.getElementById("bubbleFive").style.top = "66%";
                        document.getElementById("bubbleSix").style.top = "82%";
                        document.getElementById("bubbleSeven").style.top = "98%";
                      }
                      else if(document.documentElement.offsetWidth <= 1280){
                        document.getElementById("bubbleOne").style.top = "0%";
                        document.getElementById("bubbleTwo").style.top = "16%";
                        document.getElementById("bubbleThree").style.top = "32%";
                        document.getElementById("bubbleFour").style.top = "48%";
                        document.getElementById("bubbleFive").style.top = "66%";
                        document.getElementById("bubbleSix").style.top = "82%";
                        document.getElementById("bubbleSeven").style.top = "98%";
                      }
                      else{
                        document.getElementById("bubbleOne").style.top = "-1%";
                        document.getElementById("bubbleTwo").style.top = "15%";
                        document.getElementById("bubbleThree").style.top = "31%";
                        document.getElementById("bubbleFour").style.top = "48%";
                        document.getElementById("bubbleFive").style.top = "65%";
                        document.getElementById("bubbleSix").style.top = "81%";
                        document.getElementById("bubbleSeven").style.top = "98%";
                      }
                break;
        case "5":
                document.getElementById("gradDown").style.height = "64%";
                document.getElementById("gradUp").style.height = "36%";
                document.getElementById("bubbleOneRing").style.border = "1px solid transparent";
                document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
                document.getElementById("bubbleThreeRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFourRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFiveRing").style.border = "1px solid #1E90FF";
                document.getElementById("bubbleSixRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSevenRing").style.border = "1px solid #eae9e9";

                // document.getElementById("bubbleOne").style.top = "-6px";
                document.getElementById("bubbleOne").style.background = "#E3E6F3";
                // document.getElementById("bubbleTwo").style.top = "30px";
                document.getElementById("bubbleTwo").style.background = "#C5D9F5";
                // document.getElementById("bubbleThree").style.top = "66px";
                document.getElementById("bubbleThree").style.background = "#AACDF7";
                // document.getElementById("bubbleFour").style.top = "103px";
                document.getElementById("bubbleFour").style.background = "#4FA6FC";
                document.getElementById("bubbleFive").style.top = "64%";
                document.getElementById("bubbleFive").style.background = "#1E90FF";
                // document.getElementById("bubbleSix").style.top = "107px";
                document.getElementById("bubbleSix").style.background = "#B4D2F6";
                // document.getElementById("bubbleSeven").style.top = "107px";
                document.getElementById("bubbleSeven").style.background = "#E3E6F3";
                if(document.documentElement.offsetWidth <= 1440 && document.documentElement.offsetWidth > 1280){
                        document.getElementById("bubbleOne").style.top = "-1%";
                        document.getElementById("bubbleTwo").style.top = "16%";
                        document.getElementById("bubbleThree").style.top = "32%";
                        document.getElementById("bubbleFour").style.top = "48%";
                        document.getElementById("bubbleFive").style.top = "64%";
                        document.getElementById("bubbleSix").style.top = "82%";
                        document.getElementById("bubbleSeven").style.top = "98%";
                      }
                      else if(document.documentElement.offsetWidth <= 1280){
                        document.getElementById("bubbleOne").style.top = "0%";
                        document.getElementById("bubbleTwo").style.top = "16%";
                        document.getElementById("bubbleThree").style.top = "32%";
                        document.getElementById("bubbleFour").style.top = "48%";
                        document.getElementById("bubbleFive").style.top = "64%";
                        document.getElementById("bubbleSix").style.top = "82%";
                        document.getElementById("bubbleSeven").style.top = "98%";
                      }
                      else{
                        document.getElementById("bubbleOne").style.top = "-1%";
                        document.getElementById("bubbleTwo").style.top = "15%";
                        document.getElementById("bubbleThree").style.top = "31%";
                        document.getElementById("bubbleFour").style.top = "47%";
                        document.getElementById("bubbleFive").style.top = "64%";
                        document.getElementById("bubbleSix").style.top = "81%";
                        document.getElementById("bubbleSeven").style.top = "98%";
                      }
                break;
        case "6":
                document.getElementById("gradDown").style.height = "78%";
                document.getElementById("gradUp").style.height = "22%";
                // document.getElementById("sidenav").style.marginBottom = "5vh";
                document.getElementById("bubbleOneRing").style.border = "1px solid transparent";
                document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
                document.getElementById("bubbleThreeRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFourRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFiveRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSixRing").style.border = "1px solid #1E90FF";
                document.getElementById("bubbleSevenRing").style.border = "1px solid #eae9e9";

                // document.getElementById("bubbleOne").style.top = "-6px";
                document.getElementById("bubbleOne").style.background = "#E3E6F3";
                // document.getElementById("bubbleTwo").style.top = "30px";
                document.getElementById("bubbleTwo").style.background = "#CADCF5";
                // document.getElementById("bubbleThree").style.top = "66px";
                document.getElementById("bubbleThree").style.background = "#C5D9F5";
                // document.getElementById("bubbleFour").style.top = "103px";
                document.getElementById("bubbleFour").style.background = "#ABCEF7";
                // document.getElementById("bubbleFive").style.top = "139px";
                document.getElementById("bubbleFive").style.background = "#64AFFB";
                document.getElementById("bubbleSix").style.top = "80%";
                document.getElementById("bubbleSix").style.background = "#1E90FF";
                // document.getElementById("bubbleSeven").style.top = "107px";
                document.getElementById("bubbleSeven").style.background = "#E3E6F3";
                if(document.documentElement.offsetWidth <= 1440 && document.documentElement.offsetWidth > 1280){
                        document.getElementById("bubbleOne").style.top = "-1%";
                        document.getElementById("bubbleTwo").style.top = "16%";
                        document.getElementById("bubbleThree").style.top = "32%";
                        document.getElementById("bubbleFour").style.top = "48%";
                        document.getElementById("bubbleFive").style.top = "64%";
                        document.getElementById("bubbleSix").style.top = "80%";
                        document.getElementById("bubbleSeven").style.top = "98%";
                      }
                      else if(document.documentElement.offsetWidth <= 1280){
                        document.getElementById("bubbleOne").style.top = "0%";
                        document.getElementById("bubbleTwo").style.top = "16%";
                        document.getElementById("bubbleThree").style.top = "32%";
                        document.getElementById("bubbleFour").style.top = "48%";
                        document.getElementById("bubbleFive").style.top = "64%";
                        document.getElementById("bubbleSix").style.top = "81%";
                        document.getElementById("bubbleSeven").style.top = "98%";
                      }
                      else{
                        document.getElementById("bubbleOne").style.top = "-1%";
                        document.getElementById("bubbleTwo").style.top = "15%";
                        document.getElementById("bubbleThree").style.top = "31%";
                        document.getElementById("bubbleFour").style.top = "47%";
                        document.getElementById("bubbleFive").style.top = "64%";
                        document.getElementById("bubbleSix").style.top = "80%";
                        document.getElementById("bubbleSeven").style.top = "98%";
                      }
                break;
        case "7":
                document.getElementById("gradDown").style.height = "99%";
                document.getElementById("gradUp").style.height = "0%";
                // document.getElementById("sidenav").style.marginBottom = "9vh";
                document.getElementById("bubbleOneRing").style.border = "1px solid transparent";
                document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
                document.getElementById("bubbleThreeRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFourRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFiveRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSixRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSevenRing").style.border = "1px solid #1E90FF";

                // document.getElementById("bubbleOne").style.top = "-6px";
                document.getElementById("bubbleOne").style.background = "#E3E6F3";
                // document.getElementById("bubbleTwo").style.top = "13%";
                document.getElementById("bubbleTwo").style.background = "#CADCF5";
                // document.getElementById("bubbleThree").style.top = "28%";
                document.getElementById("bubbleThree").style.background = "#BDD6F6";
                // document.getElementById("bubbleFour").style.top = "44%";
                document.getElementById("bubbleFour").style.background = "#94C5FF";
                // document.getElementById("bubbleFive").style.top = "60%";
                document.getElementById("bubbleFive").style.background = "#4FA6FC";
                // document.getElementById("bubbleSix").style.top = "76%";
                document.getElementById("bubbleSix").style.background = "#0092FF";
                document.getElementById("bubbleSeven").style.top = "97%";
                document.getElementById("bubbleSeven").style.background = "#1E90FF";
                if(document.documentElement.offsetWidth <= 1440 && document.documentElement.offsetWidth > 1280){
                        document.getElementById("bubbleOne").style.top = "-1%";
                        document.getElementById("bubbleTwo").style.top = "16%";
                        document.getElementById("bubbleThree").style.top = "32%";
                        document.getElementById("bubbleFour").style.top = "48%";
                        document.getElementById("bubbleFive").style.top = "64%";
                        document.getElementById("bubbleSix").style.top = "80%";
                        document.getElementById("bubbleSeven").style.top = "97%";
                      }
                      else if(document.documentElement.offsetWidth <= 1280){
                        document.getElementById("bubbleOne").style.top = "0%";
                        document.getElementById("bubbleTwo").style.top = "16%";
                        document.getElementById("bubbleThree").style.top = "32%";
                        document.getElementById("bubbleFour").style.top = "48%";
                        document.getElementById("bubbleFive").style.top = "64%";
                        document.getElementById("bubbleSix").style.top = "80%";
                        document.getElementById("bubbleSeven").style.top = "97%";
                      }
                      else{
                        document.getElementById("bubbleOne").style.top = "-1%";
                        document.getElementById("bubbleTwo").style.top = "16%";
                        document.getElementById("bubbleThree").style.top = "31%";
                        document.getElementById("bubbleFour").style.top = "48%";
                        document.getElementById("bubbleFive").style.top = "64%";
                        document.getElementById("bubbleSix").style.top = "80%";
                        document.getElementById("bubbleSeven").style.top = "97%";
                      }
                break;
      default:
                break;
    }
  }
        isSkippingSection(listArray: string[], tag: any) {
                if(Math.abs(listArray.indexOf(tag) - listArray.indexOf(this.previousSection)) >= 1){
                        this.isSkip = true;
                        setTimeout(() =>{
                                this.isSkip = false
                        },1000)
                }
                else{
                        this.isSkip = false
                }
        }




  submitEmail(){
        var email = (<HTMLInputElement>document.getElementById("emailInput")).value
        if(email.includes('@')  && email.includes('.')){
                this.email_notification_text = "Thank you! We will get in touch with you shortly"
                setTimeout(()=>{
                        this.isNotEmail = false;
                },10000)
                // Do Something Here
                console.log("Submit Email")
        }else{
                this.isNotEmail = true;
                
        }
  }

  sideNavMobile(sectionName){
        let listArray: string[] = ['section1_mobile','section2_mobile','section3_mobile','section4_mobile','section5_mobile','section6_mobile','section7_mobile']
        for (let entry of listArray) {
          document.getElementById(entry).classList.remove("sideNav-mobile-select");
        }
        switch(sectionName){
          case 'section1_mobile': document.getElementById(sectionName).className += " sideNav-mobile-select";
                  break;
          case 'section2_mobile': document.getElementById(sectionName).className += " sideNav-mobile-select";
                  break;
          case 'section3_mobile': document.getElementById(sectionName).className += " sideNav-mobile-select";
                  break;
          case 'section4_mobile': document.getElementById(sectionName).className += " sideNav-mobile-select";
                  break;
          case 'section5_mobile': document.getElementById(sectionName).className += " sideNav-mobile-select";
                  break;
          case 'section6_mobile': document.getElementById(sectionName).className += " sideNav-mobile-select";
                  break;
          case 'section7_mobile': document.getElementById(sectionName).className += " sideNav-mobile-select";
                  break;
          default:break;
        }
      }

public onIntersection1({ target, visible }: { target: Element; visible: boolean }): void {
        if(visible && !this.isSkip){
        //   this.sideNavAnimate("1","wallets");
        //   this.sideNavMobile("section1_mobile")
        }
}
public onIntersection2({ target, visible }: { target: Element; visible: boolean }): void {
        if(visible && !this.isSkip){
                // this.sideNavAnimate("2","lending");
                // this.sideNavMobile("section2_mobile")
                // document.getElementById("sideNavContain").style.transform = "translate(0%)";
        }
}
public onIntersection3({ target, visible }: { target: Element; visible: boolean }): void {
        if(visible && !this.isSkip){
                // this.sideNavAnimate("3","borrow");
                // this.sideNavMobile("section3_mobile")
                // document.getElementById("sideNavContain").style.transform = "translate(0%)";
        }
}
public onIntersection4({ target, visible }: { target: Element; visible: boolean }): void {
        if(visible && !this.isSkip){
                // this.sideNavAnimate("4","inr");
                // this.sideNavMobile("section4_mobile")
                // document.getElementById("sideNavContain").style.transform = "translate(0%)";
        }
}
public onIntersection5({ target, visible }: { target: Element; visible: boolean }): void {
        if(visible && !this.isSkip){
                // this.sideNavAnimate("5","credit");
                // this.sideNavMobile("section5_mobile")
                // document.getElementById("sideNavContain").style.transform = "translate(0%)";
        }
}
public onIntersection6({ target, visible }: { target: Element; visible: boolean }): void {
        if(visible && !this.isSkip){
                // console.log("onthersection6")
                // this.sideNavAnimate("6","pricing");
                // this.sideNavMobile("section6_mobile")
                // document.getElementById("sideNavContain").style.transform = "translate(0%)";
        }
}
public onIntersection7({ target, visible }: { target: Element; visible: boolean }): void {
        if(visible && !this.isSkip){
                // this.sideNavAnimate("7","partner");
                // this.sideNavMobile("section7_mobile")
                // document.getElementById("sideNavContain").style.transform = "translate(0%)";
        }
}
public onIntersection8({ target, visible }: { target: Element; visible: boolean }): void {
        if(!visible){
                document.getElementById("sideNavContain").style.position = "sticky";
                document.getElementById("sideNavContain").style.width = "100%";
        }
        else if(visible){
                document.getElementById("sideNavContain").style.position = "relative";
                document.getElementById("sideNavContain").style.width = "100%";
        }

}

@HostListener('window:scroll', ['$event'])

srcollHandler(event) {
        var section1 = document.getElementById("sectionDiv1").getBoundingClientRect().top
        var section2 = document.getElementById("sectionDiv2").getBoundingClientRect().top
        var section3 = document.getElementById("sectionDiv3").getBoundingClientRect().top
        var section4 = document.getElementById("sectionDiv4").getBoundingClientRect().top
        var section5 = document.getElementById("sectionDiv5").getBoundingClientRect().top
        var section6 = document.getElementById("sectionDiv6").getBoundingClientRect().top
        var section7 = document.getElementById("sectionDiv7").getBoundingClientRect().top
        var section1bound = document.getElementById("sectionDiv1").offsetHeight + section1 -200
        var section2bound = document.getElementById("sectionDiv2").offsetHeight + section2 -200
        var section3bound = document.getElementById("sectionDiv3").offsetHeight + section3 -200
        var section4bound = document.getElementById("sectionDiv4").offsetHeight + section4 -200
        var section5bound = document.getElementById("sectionDiv5").offsetHeight + section5 -200
        var section6bound = document.getElementById("sectionDiv6").offsetHeight + section6 -200
        var section7bound = document.getElementById("sectionDiv7").offsetHeight + section7 -300
    
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        var limit = vh * 1/2
        // console.log(limit)
        // console.log(section1)
        // console.log("height : "+ (document.getElementById("sectionDiv1").offsetHeight+section1) )
        // console.log("limit : "+ limit)
        // console.log(section2)
        // console.log(section3)
        // console.log(section4)
        // console.log(section5)
        // console.log(section6)
        // console.log(section7)
        if(section1 < limit && section1bound > 0 && !this.isSkip){
                this.sideNavAnimate("1","wallets");
                this.sideNavMobile("section1_mobile")
        }
        else if(section2 < limit && section2bound > 0 && !this.isSkip){
                this.sideNavAnimate("2","lending");
                this.sideNavMobile("section2_mobile")
        }
        else if(section3 < limit && section3bound > 0 && !this.isSkip){
                this.sideNavAnimate("3","borrow");
                this.sideNavMobile("section3_mobile")
        }
        else if(section4 < limit && section4bound > 0 && !this.isSkip){
                this.sideNavAnimate("4","inr");
                this.sideNavMobile("section4_mobile")
        }
        else if(section5 < limit && section5bound > 0 && !this.isSkip){
                this.sideNavAnimate("5","credit");
                this.sideNavMobile("section5_mobile")
        }
        else if(section6 < limit && section6bound > 0 && !this.isSkip){
                this.sideNavAnimate("6","pricing");
                this.sideNavMobile("section6_mobile")
        }
        else if(section7 < limit && section7bound > 0 && !this.isSkip){
                this.sideNavAnimate("7","partner");
                this.sideNavMobile("section7_mobile")
        }
        else if(window.scrollY>document.getElementById("landing_section").offsetHeight+15){
                document.getElementById("sideNavContain").style.position = "sticky";
                document.getElementById("sideNavContain").style.width = "100%";
        }
        else{
                document.getElementById("sideNavContain").style.position = "relative";
                document.getElementById("sideNavContain").style.width = "100%";
        }
      }

}
