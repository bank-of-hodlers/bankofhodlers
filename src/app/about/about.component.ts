import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { AboutText } from "../about";
import { Title } from '@angular/platform-browser';
import { StatuscheckerService } from '../statuschecker.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {

  constructor(  public titleService : Title, public statusCheck :StatuscheckerService ) { }

  dynm = AboutText;
  previousSection = "story";
  isSkip = false;

  

  ngOnInit() {
    this.statusCheck.onRefreashUrlChecker();
    this.titleService.setTitle('About Us - Bank of Hodlers');
    document.getElementById("bubbleOneRing").style.border = "1px solid #1E90FF";
  }

  sideNavAnimate(percen, tag){

    let listArray: string[] = ['story','exe','team','invest']
    this.isSkippingSection(listArray, tag)
    this.previousSection = tag
    for (let entry of listArray) {
      document.getElementById(entry).classList.remove("select");
    }
    switch(tag){
      case 'story': document.getElementById(tag).className += " select";
              break;
      case 'exe': document.getElementById(tag).className += " select";
              break;
      case 'team': document.getElementById(tag).className += " select";
              break;
      case 'invest': document.getElementById(tag).className += " select";
              break;
      default:break;
    }
    document.getElementById("sidenav").style.height = "124px";
    switch(percen){
      case "0":

        document.getElementById("gradDown").style.height = "0%";
        document.getElementById("gradDown").style.display = "block";
        document.getElementById("gradUp").style.height = "100%";
        document.getElementById("gradUp").style.height = "67%";
        document.getElementById("bubbleOneRing").style.border = "1px solid #1E90FF";
        document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
        document.getElementById("bubbleThreeRing").style.border = "1px solid #E3E6F3";
        document.getElementById("bubbleFourRing").style.border = "1px solid #E3E6F3";
        document.getElementById("bubbleFourRing").style.border = "1px solid transparent";

        document.getElementById("bubbleOne").style.top = "-2%";
        document.getElementById("bubbleOne").style.background = "#1E90FF";
        document.getElementById("bubbleTwo").style.top = "29%";
        document.getElementById("bubbleTwo").style.background = "#9AC6F8";
        document.getElementById("bubbleThree").style.top = "63%";
        document.getElementById("bubbleThree").style.background = "#E3E6F3";
        document.getElementById("bubbleFour").style.top = "96%";
        document.getElementById("bubbleFour").style.background = "#E3E6F3";
        document.getElementById("bubbleFour").style.background = "transparent";
        if(document.documentElement.offsetWidth <= 1280){
          // document.getElementById("sidenav").style.height = "151px";
          document.getElementById("bubbleTwo").style.top = "32%";
          document.getElementById("bubbleThree").style.top = "65%";
        }
        else if(document.documentElement.offsetWidth > 1280 && document.documentElement.offsetWidth <= 1366){
          document.getElementById("sidenav").style.height = "127px";
          // document.getElementById("bubbleThree").style.top = "69%";
        }
        else{
          document.getElementById("sidenav").style.height = "124px";
          document.getElementById("bubbleThree").style.top = "64%";
        }
        break;
      case "34":

        document.getElementById("gradDown").style.height = "34%";
        document.getElementById("gradDown").style.display = "block";
        document.getElementById("gradUp").style.height = "66%";
        document.getElementById("gradUp").style.height = "34%";
        document.getElementById("bubbleOneRing").style.border = "1px solid transparent";
        document.getElementById("bubbleTwoRing").style.border = "1px solid #1E90FF";
        document.getElementById("bubbleThreeRing").style.border = "1px solid transparent";
        document.getElementById("bubbleThreeRing").style.border = "1px solid #E3E6F3";
        document.getElementById("bubbleFourRing").style.border = "1px solid #E3E6F3";
        document.getElementById("bubbleFourRing").style.border = "1px solid transparent";

        document.getElementById("bubbleOne").style.top = "-2%";
        document.getElementById("bubbleOne").style.background = "#EEF0F8";
        document.getElementById("bubbleTwo").style.top = "31%";
        document.getElementById("bubbleTwo").style.background = "#1E90FF";
        document.getElementById("bubbleThree").style.background = "#A5CBF7";
        document.getElementById("bubbleThree").style.background = "#E3E6F3";
        document.getElementById("bubbleThree").style.top = "63%";
        document.getElementById("bubbleFour").style.background = "#E3E6F3";
        document.getElementById("bubbleFour").style.background = "transparent";
        if(document.documentElement.offsetWidth <= 1280){
          document.getElementById("sidenav").style.height = "151px";
          document.getElementById("bubbleThree").style.top = "69%";
        }
        else if(document.documentElement.offsetWidth > 1280 && document.documentElement.offsetWidth <= 1366){
          document.getElementById("bubbleThree").style.top = "64%";
        }
        else{
          document.getElementById("sidenav").style.height = "124px";
          document.getElementById("bubbleFour").style.top = "96%";
        }
        break;
      case "68":

        document.getElementById("gradDown").style.height = "68%";
        document.getElementById("gradDown").style.display = "block";
        document.getElementById("gradUp").style.height = "32%";
        document.getElementById("gradUp").style.height = "0%";
        document.getElementById("bubbleOneRing").style.border = "1px solid transparent";
        document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
        document.getElementById("bubbleThreeRing").style.border = "1px solid #1E90FF";
        document.getElementById("bubbleFourRing").style.border = "1px solid #E3E6F3";
        document.getElementById("bubbleFourRing").style.border = "1px solid transparent";

        document.getElementById("bubbleOne").style.background = "#E3E6F3";
        document.getElementById("bubbleTwo").style.top = "29%";
        document.getElementById("bubbleTwo").style.background = "#95C4F8";
        document.getElementById("bubbleThree").style.top = "62%";
        document.getElementById("bubbleThree").style.background = "#1E90FF";
        document.getElementById("bubbleFour").style.background = "#E3E6F3";  
        document.getElementById("bubbleFour").style.background = "#E3E6F3";
        document.getElementById("bubbleFour").style.background = "transparent";
        if(document.documentElement.offsetWidth <= 1280){
          document.getElementById("bubbleThree").style.top = "63%";
        }
        else if(document.documentElement.offsetWidth > 1280 && document.documentElement.offsetWidth <= 1366){
          document.getElementById("bubbleTwo").style.top = "31%";
          document.getElementById("bubbleThree").style.top = "64%";
        }
        else{
          document.getElementById("bubbleThree").style.top = "62%";
        }      
        break;
      case "100":

        document.getElementById("gradDown").style.height = "100%";
        document.getElementById("gradDown").style.display = "block";
        document.getElementById("gradUp").style.height = "0%";
        document.getElementById("bubbleOneRing").style.border = "1px solid transparent";
        document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
        document.getElementById("bubbleThreeRing").style.border = "1px solid transparent";
        document.getElementById("bubbleFourRing").style.border = "1px solid #1E90FF";

        document.getElementById("bubbleOne").style.background = "#E3E6F3";
        document.getElementById("bubbleTwo").style.background = "#BDD6F6 ";
        document.getElementById("bubbleThree").style.background = "#9AC6F8";
        document.getElementById("bubbleFour").style.background = "#1E90FF";
        if(document.documentElement.offsetWidth <= 1280){
          document.getElementById("sidenav").style.height = "132px";
        }
        else{
          document.getElementById("sidenav").style.height = "124px";
        }
        break;
      default:
        break;
    }
  }

  isSkippingSection(listArray: string[], tag: any) {
    if(Math.abs(listArray.indexOf(tag) - listArray.indexOf(this.previousSection)) >= 2){
      this.isSkip = true;
      setTimeout(() =>{
        this.isSkip = false
      },1000)
    }
    else{
      this.isSkip = false
    }
  } 

  sideNavMobile(sectionName){
    // let listArray: string[] = ['section1_mobile','section2_mobile','section3_mobile','section4_mobile']
    let listArray: string[] = ['section1_mobile','section2_mobile','section3_mobile']
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
      default:break;
    }
  }

  public onIntersection1({ target, visible }: { target: Element; visible: boolean }): void {
    if(visible && !this.isSkip){
      this.sideNavAnimate("0","story")
      this.sideNavMobile("section1_mobile")
      // document.getElementById("sideNavContain").style.transform = "translate(0%)";
    }
  }
  public onIntersection2({ target, visible }: { target: Element; visible: boolean }): void {
    if(visible && !this.isSkip){
      this.sideNavAnimate("34","exe")
      this.sideNavMobile("section2_mobile")
      // document.getElementById("sideNavContain").style.transform = "translate(0%)";
    }
  }
  public onIntersection3({ target, visible }: { target: Element; visible: boolean }): void {
    if(visible && !this.isSkip){
      this.sideNavAnimate("68","team")
      this.sideNavMobile("section3_mobile")
      // document.getElementById("sideNavContain").style.transform = "translate(0%)";
    }
  }
  public onIntersection4({ target, visible }: { target: Element; visible: boolean }): void {
    if(visible && !this.isSkip){
      // this.sideNavAnimate("100","invest")
      // this.sideNavMobile("section4_mobile")
      // document.getElementById("sideNavContain").style.transform = "translate(0%)";
    }
  }
  // public onIntersection10({ target, visible }: { target: Element; visible: boolean }): void {
  //   if(!visible){
  //       document.getElementById("sideNavContain").style.position = "sticky";
  //       document.getElementById("sideNavContain").style.width = "100%";
  //     }
  //     else if(visible){
  //       document.getElementById("sideNavContain").style.position = "relative";
  //       document.getElementById("sideNavContain").style.width = "100%";
  //     }
  // }

}
