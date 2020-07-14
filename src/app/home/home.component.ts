import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HomeText } from '../hometext';
import { StatuscheckerService } from '../statuschecker.service';
import { Scroll } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // encapsulation: ViewEncapsulation.None,
})

export class HomeComponent implements OnInit {

  constructor( public titleService : Title, public dynm : HomeText, public statusCheck :StatuscheckerService ) { }
  previousSection = "sectionOne_2";
  isSkip = false;

  ngOnInit() {
    this.titleService.setTitle('Bank of Hodlers');
    document.getElementById("bubbleOneRing").style.border = "1px solid #1E90FF";
    this.statusCheck.onRefreashUrlChecker();
  }

  sideNavAnimate(percen, tag){
    // let listArray: string[] = ['sectionOne_2','sectionTwo','sectionThree','sectionFour','sectionFive','sectionSix','sectionSeven','sectionEight','sectionNine']
    let listArray: string[] = ['sectionOne_2','sectionTwo','sectionThree','sectionFour','sectionSix','sectionSeven','sectionNine']
    this.isSkippingSection(listArray, tag)
    this.previousSection = tag
    for (let entry of listArray) {
      document.getElementById(entry).classList.remove("select");
    }
    switch(tag){
      case 'sectionOne_2': document.getElementById(tag).className += " select";
      document.getElementById('sectionOne_2').className += " select";
              break;
      case 'sectionTwo': document.getElementById(tag).className += " select";
              break;
      case 'sectionThree': document.getElementById(tag).className += " select";
              break;
      case 'sectionFour': document.getElementById(tag).className += " select";
              break;
      case 'sectionFive': document.getElementById(tag).className += " select";
              break;
      case 'sectionSix': document.getElementById(tag).className += " select";
              break;
      case 'sectionSeven': document.getElementById(tag).className += " select";
              break;
      case 'sectionEight': document.getElementById(tag).className += " select";
              break;
      case 'sectionNine': document.getElementById(tag).className += " select";
              break;
      case 'sectionTen': document.getElementById(tag).className += " select";
              break;
      default:break;
    }
    switch(percen){
        case "1":
                document.getElementById("gradDown").style.height = "0%";
                document.getElementById("gradDown").style.display = "block";
                document.getElementById("gradUp").style.height = "100%";
                // document.getElementById("gradUp_2").style.height = "100%";
                // document.getElementById("gradDown_2").style.height = "0%";
                // document.getElementById("gradDown_2").style.background = "linear-gradient(0deg,#E3E6F3 0%, #f4fdff 100%)";
                // document.getElementById("gradUp_2").style.background = "linear-gradient(180deg,#E3E6F3 0%, #f4fdff 100%)";
                document.getElementById("gradDown").style.background = "linear-gradient(0deg,#1E90FF 0%, #f4fdff 100%)";
                document.getElementById("gradUp").style.background = "linear-gradient(180deg,#1E90FF 0%, #f4fdff 100%)";
                document.getElementById("bubbleOneRing").style.border = "1px solid #1E90FF";
                document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
                document.getElementById("bubbleThreeRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFourRing").style.border = "1px solid transparent";
                // document.getElementById("bubbleFiveRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSixRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSevenRing").style.border = "1px solid transparent";
                // document.getElementById("bubbleEightRing").style.border = "1px solid transparent";
                document.getElementById("bubbleNineRing").style.border = "1px solid #eae9e9";
                // document.getElementById("bubbleTenRing").style.border = "1px solid transparent";

                document.getElementById("bubbleOne").style.top = "0%";
                document.getElementById("bubbleOne").style.top = "-0.5%";
                document.getElementById("bubbleOne").style.background = "#1E90FF";
                document.getElementById("bubbleTwo").style.top = "13.5%";
                document.getElementById("bubbleTwo").style.top = "15.5%";
                document.getElementById("bubbleTwo").style.background = "#6DB3FA";
                document.getElementById("bubbleThree").style.top = "25%";
                document.getElementById("bubbleThree").style.top = "32%";
                document.getElementById("bubbleThree").style.background = "#AACDF7";
                document.getElementById("bubbleFour").style.top = "37.5%";
                document.getElementById("bubbleFour").style.top = "46.5%";
                document.getElementById("bubbleFour").style.background = "#CADBF5";
                // document.getElementById("bubbleFive").style.top = "49%";
                // document.getElementById("bubbleFive").style.background = "#E3E6F3";
                document.getElementById("bubbleSix").style.top = "61.5%";
                document.getElementById("bubbleSix").style.top = "62.5%";
                document.getElementById("bubbleSix").style.background = "#E3E6F3";
                document.getElementById("bubbleSeven").style.top = "73%";
                document.getElementById("bubbleSeven").style.top = "78%";
                document.getElementById("bubbleSeven").style.background = "#E3E6F3";
                // document.getElementById("bubbleEight").style.background = "#E3E6F3";
                // document.getElementById("bubbleEight").style.top = "85.5%";
                document.getElementById("bubbleNine").style.background = "#E3E6F3";
                document.getElementById("bubbleNine").style.top = "98%";
                document.getElementById("bubbleNine").style.top = "93%";
                // document.getElementById("bubbleTen").style.background = "#E3E6F3";
                if(document.documentElement.offsetWidth <= 1366 && document.documentElement.offsetWidth > 1280){
                  document.getElementById("bubbleOne").style.top = "-0.5%";
                  document.getElementById("bubbleTwo").style.top = "17.5%";
                  document.getElementById("bubbleThree").style.top = "33%";
                  document.getElementById("bubbleFour").style.top = "48.5%";
                  document.getElementById("bubbleSix").style.top = "63.5%";
                  document.getElementById("bubbleSeven").style.top = "79%";
                  document.getElementById("bubbleNine").style.top = "95%";
                }
                else if(document.documentElement.offsetWidth <= 1280){
                  document.getElementById("bubbleOne").style.top = "-0.5%";
                  document.getElementById("bubbleTwo").style.top = "16.5%";
                  document.getElementById("bubbleThree").style.top = "32%";
                  document.getElementById("bubbleFour").style.top = "47.5%";
                  document.getElementById("bubbleSix").style.top = "63.5%";
                  document.getElementById("bubbleSeven").style.top = "78%";
                  document.getElementById("bubbleNine").style.top = "94%";
                }
                else{
                  document.getElementById("bubbleOne").style.top = "-0.5%";
                  document.getElementById("bubbleTwo").style.top = "15.5%";
                  document.getElementById("bubbleThree").style.top = "32%";
                  document.getElementById("bubbleFour").style.top = "46.5%";
                  document.getElementById("bubbleSix").style.top = "62.5%";
                  document.getElementById("bubbleSeven").style.top = "78%";
                  document.getElementById("bubbleNine").style.top = "93%";
                }
                break;
        case "2":
                document.getElementById("gradDown").style.height = "15%";
                document.getElementById("gradUp").style.height = "85%";
                // document.getElementById("gradUp_2").style.height = "100%";
                // document.getElementById("gradDown_2").style.height = "0%";
                // document.getElementById("gradDown_2").style.background = "linear-gradient(0deg,#E3E6F3 0%, #f4fdff 100%)";
                // document.getElementById("gradUp_2").style.background = "linear-gradient(180deg,#E3E6F3 0%, #f4fdff 100%)";
                document.getElementById("gradDown").style.background = "linear-gradient(0deg,#1E90FF 0%, #f4fdff 100%)";
                document.getElementById("gradUp").style.background = "linear-gradient(180deg,#1E90FF 0%, #f4fdff 100%)";
                document.getElementById("bubbleOneRing").style.border = "1px solid transparent";
                document.getElementById("bubbleTwoRing").style.border = "1px solid #1E90FF";
                document.getElementById("bubbleThreeRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFourRing").style.border = "1px solid transparent";
                // document.getElementById("bubbleFiveRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSixRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSevenRing").style.border = "1px solid transparent";
                // document.getElementById("bubbleEightRing").style.border = "1px solid transparent";
                document.getElementById("bubbleNineRing").style.border = "1px solid #eae9e9";
                // document.getElementById("bubbleTenRing").style.border = "1px solid transparent";

                document.getElementById("bubbleOne").style.top = "0%";
                document.getElementById("bubbleOne").style.top = "0%";
                document.getElementById("bubbleOne").style.background = "#6DB3FA";
                document.getElementById("bubbleTwo").style.top = "12.5%";
                document.getElementById("bubbleTwo").style.top = "14.5%";
                document.getElementById("bubbleTwo").style.background = "#1E90FF";
                document.getElementById("bubbleThree").style.top = "25%";
                document.getElementById("bubbleThree").style.top = "32%";
                document.getElementById("bubbleThree").style.background = "#6DB3FA";
                document.getElementById("bubbleFour").style.top = "37.5%";
                document.getElementById("bubbleFour").style.top = "46.5%";
                document.getElementById("bubbleFour").style.background = "#AACDF7";
                // document.getElementById("bubbleFive").style.top = "49%";
                // document.getElementById("bubbleFive").style.background = "#CADBF5";
                document.getElementById("bubbleSix").style.top = "61.5%";
                document.getElementById("bubbleSix").style.top = "62.5%";
                document.getElementById("bubbleSix").style.background = "#E3E6F3";
                document.getElementById("bubbleSeven").style.top = "73%";
                document.getElementById("bubbleSeven").style.top = "78%";
                document.getElementById("bubbleSeven").style.background = "#E3E6F3";
                // document.getElementById("bubbleEight").style.background = "#E3E6F3";
                // document.getElementById("bubbleEight").style.top = "85.5%";
                document.getElementById("bubbleNine").style.background = "#E3E6F3";
                document.getElementById("bubbleNine").style.top = "98%";
                document.getElementById("bubbleNine").style.top = "93%";
                if(document.documentElement.offsetWidth <= 1366 && document.documentElement.offsetWidth > 1280){
                  document.getElementById("bubbleOne").style.top = "0%";
                  document.getElementById("bubbleTwo").style.top = "15.5%";
                  document.getElementById("bubbleThree").style.top = "33%";
                  document.getElementById("bubbleFour").style.top = "48.5%";
                  document.getElementById("bubbleSix").style.top = "63.5%";
                  document.getElementById("bubbleSeven").style.top = "79%";
                  document.getElementById("bubbleNine").style.top = "95%";
                }
                else if(document.documentElement.offsetWidth <= 1280){
                  document.getElementById("bubbleOne").style.top = "0%";
                  document.getElementById("bubbleTwo").style.top = "14.5%";
                  document.getElementById("bubbleThree").style.top = "32%";
                  document.getElementById("bubbleFour").style.top = "47.5%";
                  document.getElementById("bubbleSix").style.top = "62.5%";
                  document.getElementById("bubbleSeven").style.top = "78%";
                  document.getElementById("bubbleNine").style.top = "94%";
                }
                else{
                  document.getElementById("bubbleOne").style.top = "-0%";
                  document.getElementById("bubbleTwo").style.top = "14.5%";
                  document.getElementById("bubbleThree").style.top = "32%";
                  document.getElementById("bubbleFour").style.top = "46.5%";
                  document.getElementById("bubbleSix").style.top = "62.5%";
                  document.getElementById("bubbleSeven").style.top = "78%";
                  document.getElementById("bubbleNine").style.top = "93%";
                }
                break;
        case "3":
                document.getElementById("gradDown").style.height = "25%";
                document.getElementById("gradUp").style.height = "75%";
                // document.getElementById("gradUp_2").style.height = "100%";
                // document.getElementById("gradDown_2").style.height = "0%";
                // document.getElementById("gradDown_2").style.background = "linear-gradient(0deg,#E3E6F3 0%, #f4fdff 100%)";
                // document.getElementById("gradUp_2").style.background = "linear-gradient(180deg,#E3E6F3 0%, #f4fdff 100%)";
                document.getElementById("gradDown").style.background = "linear-gradient(0deg,#1E90FF 0%, #f4fdff 100%)";
                document.getElementById("gradUp").style.background = "linear-gradient(180deg,#1E90FF 0%, #f4fdff 100%)";
                document.getElementById("bubbleOneRing").style.border = "1px solid transparent";
                document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
                document.getElementById("bubbleThreeRing").style.border = "1px solid #1E90FF";
                document.getElementById("bubbleFourRing").style.border = "1px solid transparent";
                // document.getElementById("bubbleFiveRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSixRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSevenRing").style.border = "1px solid transparent";
                // document.getElementById("bubbleEightRing").style.border = "1px solid transparent";
                document.getElementById("bubbleNineRing").style.border = "1px solid transparent";

                document.getElementById("bubbleOne").style.top = "0%";
                document.getElementById("bubbleOne").style.top = "0%";
                document.getElementById("bubbleOne").style.background = "#AACDF7";
                document.getElementById("bubbleTwo").style.top = "12.5%";
                document.getElementById("bubbleTwo").style.top = "14.5%";
                document.getElementById("bubbleTwo").style.background = "#6DB3FA";
                document.getElementById("bubbleThree").style.top = "24%";
                document.getElementById("bubbleThree").style.top = "30%";
                document.getElementById("bubbleThree").style.background = "#1E90FF";
                document.getElementById("bubbleFour").style.top = "37.5%";
                document.getElementById("bubbleFour").style.top = "46.5%";
                document.getElementById("bubbleFour").style.background = "#6DB3FA";
                // document.getElementById("bubbleFive").style.top = "49%";
                // document.getElementById("bubbleFive").style.background = "#CADBF5";
                document.getElementById("bubbleSix").style.top = "61.5%";
                document.getElementById("bubbleSix").style.top = "62.5%";
                document.getElementById("bubbleSix").style.background = "#E3E6F3";
                document.getElementById("bubbleSeven").style.top = "73%";
                document.getElementById("bubbleSeven").style.top = "78%";
                document.getElementById("bubbleSeven").style.background = "#E3E6F3";
                // document.getElementById("bubbleEight").style.background = "#E3E6F3";
                // document.getElementById("bubbleEight").style.top = "85.5%";
                document.getElementById("bubbleNine").style.background = "#E3E6F3";
                document.getElementById("bubbleNine").style.top = "98%";
                document.getElementById("bubbleNine").style.top = "93%";
                if(document.documentElement.offsetWidth <= 1366 && document.documentElement.offsetWidth > 1280){
                  document.getElementById("bubbleOne").style.top = "0%";
                  document.getElementById("bubbleTwo").style.top = "15.5%";
                  document.getElementById("bubbleThree").style.top = "31%";
                  document.getElementById("bubbleFour").style.top = "48.5%";
                  document.getElementById("bubbleSix").style.top = "63.5%";
                  document.getElementById("bubbleSeven").style.top = "79%";
                  document.getElementById("bubbleNine").style.top = "95%";
                }
                else if(document.documentElement.offsetWidth <= 1280){
                  document.getElementById("bubbleOne").style.top = "0%";
                  document.getElementById("bubbleTwo").style.top = "14.5%";
                  document.getElementById("bubbleThree").style.top = "30%";
                  document.getElementById("bubbleFour").style.top = "47.5%";
                  document.getElementById("bubbleSix").style.top = "62.5%";
                  document.getElementById("bubbleSeven").style.top = "78%";
                  document.getElementById("bubbleNine").style.top = "94%";
                }
                else{
                  document.getElementById("bubbleOne").style.top = "-0%";
                  document.getElementById("bubbleTwo").style.top = "14.5%";
                  document.getElementById("bubbleThree").style.top = "30%";
                  document.getElementById("bubbleFour").style.top = "46.5%";
                  document.getElementById("bubbleSix").style.top = "62.5%";
                  document.getElementById("bubbleSeven").style.top = "78%";
                  document.getElementById("bubbleNine").style.top = "93%";
                }
                break;
        case "4":
                document.getElementById("gradDown").style.height = "39%";
                document.getElementById("gradUp").style.height = "61%";
                // document.getElementById("gradUp_2").style.height = "100%";
                // document.getElementById("gradDown_2").style.height = "0%";
                // document.getElementById("gradDown_2").style.background = "linear-gradient(0deg,#E3E6F3 0%, #f4fdff 100%)";
                // document.getElementById("gradUp_2").style.background = "linear-gradient(180deg,#E3E6F3 0%, #f4fdff 100%)";
                document.getElementById("gradDown").style.background = "linear-gradient(0deg,#1E90FF 0%, #f4fdff 100%)";
                document.getElementById("gradUp").style.background = "linear-gradient(180deg,#1E90FF 0%, #f4fdff 100%)";
                document.getElementById("bubbleOneRing").style.border = "1px solid transparent";
                document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
                document.getElementById("bubbleThreeRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFourRing").style.border = "1px solid #1E90FF";
                // document.getElementById("bubbleFiveRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSixRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSevenRing").style.border = "1px solid transparent";
                // document.getElementById("bubbleEightRing").style.border = "1px solid transparent";
                document.getElementById("bubbleNineRing").style.border = "1px solid #eae9e9";

                document.getElementById("bubbleOne").style.top = "0%";
                document.getElementById("bubbleOne").style.top = "0%";
                document.getElementById("bubbleOne").style.background = "#E3E6F3";
                document.getElementById("bubbleTwo").style.top = "12.5%";
                document.getElementById("bubbleTwo").style.top = "14.5%";
                document.getElementById("bubbleTwo").style.background = "#6DB3FA";
                document.getElementById("bubbleThree").style.top = "24%";
                document.getElementById("bubbleThree").style.top = "30%";
                document.getElementById("bubbleThree").style.background = "#6DB3FA";
                document.getElementById("bubbleFour").style.top = "36.5%";
                document.getElementById("bubbleFour").style.top = "45.5%";
                document.getElementById("bubbleFour").style.background = "#1E90FF";
                // document.getElementById("bubbleFive").style.top = "49%";
                // document.getElementById("bubbleFive").style.background = "#6DB3FA";
                document.getElementById("bubbleSix").style.top = "61.5%";
                document.getElementById("bubbleSix").style.top = "62.5%";
                document.getElementById("bubbleSix").style.background = "#AACDF7";
                document.getElementById("bubbleSeven").style.top = "73%";
                document.getElementById("bubbleSeven").style.top = "78%";
                document.getElementById("bubbleSeven").style.background = "#E3E6F3";
                // document.getElementById("bubbleEight").style.background = "#E3E6F3";
                // document.getElementById("bubbleEight").style.top = "85.5%";
                document.getElementById("bubbleNine").style.background = "#E3E6F3";
                document.getElementById("bubbleNine").style.top = "98%";
                document.getElementById("bubbleNine").style.top = "93%";
                if(document.documentElement.offsetWidth <= 1366 && document.documentElement.offsetWidth > 1280){
                  document.getElementById("bubbleOne").style.top = "0%";
                  document.getElementById("bubbleTwo").style.top = "15.5%";
                  document.getElementById("bubbleThree").style.top = "31%";
                  document.getElementById("bubbleFour").style.top = "46.5%";
                  document.getElementById("bubbleSix").style.top = "63.5%";
                  document.getElementById("bubbleSeven").style.top = "79%";
                  document.getElementById("bubbleNine").style.top = "95%";
                }
                else if(document.documentElement.offsetWidth <= 1280){
                  document.getElementById("bubbleOne").style.top = "0%";
                  document.getElementById("bubbleTwo").style.top = "14.5%";
                  document.getElementById("bubbleThree").style.top = "31%";
                  document.getElementById("bubbleFour").style.top = "46%";
                  document.getElementById("bubbleSix").style.top = "62.5%";
                  document.getElementById("bubbleSeven").style.top = "78%";
                  document.getElementById("bubbleNine").style.top = "94%";
                }
                else{
                  document.getElementById("bubbleOne").style.top = "-0%";
                  document.getElementById("bubbleTwo").style.top = "14.5%";
                  document.getElementById("bubbleThree").style.top = "30%";
                  document.getElementById("bubbleFour").style.top = "45.5%";
                  document.getElementById("bubbleSix").style.top = "62.5%";
                  document.getElementById("bubbleSeven").style.top = "78%";
                  document.getElementById("bubbleNine").style.top = "93%";
                }
                break;
        case "5":
                document.getElementById("gradDown").style.height = "51%";
                document.getElementById("gradUp").style.height = "49%";
                // document.getElementById("gradUp_2").style.height = "100%";
                // document.getElementById("gradDown_2").style.height = "0%";
                // document.getElementById("gradDown_2").style.background = "linear-gradient(0deg,#E3E6F3 0%, #f4fdff 100%)";
                // document.getElementById("gradUp_2").style.background = "linear-gradient(180deg,#E3E6F3 0%, #f4fdff 100%)";
                document.getElementById("gradDown").style.background = "linear-gradient(0deg,#1E90FF 0%, #f4fdff 100%)";
                document.getElementById("gradUp").style.background = "linear-gradient(180deg,#1E90FF 0%, #f4fdff 100%)";
                document.getElementById("bubbleOneRing").style.border = "1px solid transparent";
                document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
                document.getElementById("bubbleThreeRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFourRing").style.border = "1px solid transparent";
                // document.getElementById("bubbleFiveRing").style.border = "1px solid #1E90FF";
                document.getElementById("bubbleSixRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSevenRing").style.border = "1px solid transparent";
                // document.getElementById("bubbleEightRing").style.border = "1px solid transparent";
                document.getElementById("bubbleNineRing").style.border = "1px solid #eae9e9";

                document.getElementById("bubbleOne").style.top = "0%";
                document.getElementById("bubbleOne").style.background = "#E3E6F3";
                document.getElementById("bubbleTwo").style.top = "12.5%";
                document.getElementById("bubbleTwo").style.background = "#E3E6F3";
                document.getElementById("bubbleThree").style.top = "24%";
                document.getElementById("bubbleThree").style.background = "#AACDF7";
                // document.getElementById("bubbleFour").style.top = "36.5%";
                // document.getElementById("bubbleFour").style.background = "#6DB3FA";
                document.getElementById("bubbleFive").style.top = "48%";
                document.getElementById("bubbleFive").style.background = "#1E90FF";
                document.getElementById("bubbleSix").style.top = "61.5%";
                document.getElementById("bubbleSix").style.background = "#6DB3FA";
                document.getElementById("bubbleSeven").style.top = "73%";
                document.getElementById("bubbleSeven").style.background = "#E3E6F3";
                // document.getElementById("bubbleEight").style.background = "#E3E6F3";
                // document.getElementById("bubbleEight").style.top = "85.5%";
                document.getElementById("bubbleNine").style.background = "#E3E6F3";
                document.getElementById("bubbleNine").style.top = "98%";
                break;
        case "6":
                document.getElementById("gradDown").style.height = "62%";
                document.getElementById("gradUp").style.height = "38%";
                // document.getElementById("gradDown_2").style.height = "0%";
                // document.getElementById("gradUp_2").style.height = "100%";
                // document.getElementById("gradDown_2").style.background = "linear-gradient(0deg,#E3E6F3 0%, #f4fdff 100%)";
                // document.getElementById("gradUp_2").style.background = "linear-gradient(180deg,#E3E6F3 0%, #f4fdff 100%)";
                document.getElementById("gradDown").style.background = "linear-gradient(0deg,#1E90FF 0%, #f4fdff 100%)";
                document.getElementById("gradUp").style.background = "linear-gradient(180deg,#1E90FF 0%, #f4fdff 100%)";
                document.getElementById("bubbleOneRing").style.border = "1px solid transparent";
                document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
                document.getElementById("bubbleThreeRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFourRing").style.border = "1px solid transparent";
                // document.getElementById("bubbleFiveRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSixRing").style.border = "1px solid #1E90FF";
                document.getElementById("bubbleSevenRing").style.border = "1px solid transparent";
                // document.getElementById("bubbleEightRing").style.border = "1px solid transparent";
                document.getElementById("bubbleNineRing").style.border = "1px solid #E3E6F3";


                document.getElementById("bubbleOne").style.top = "0%";
                document.getElementById("bubbleOne").style.top = "0%";
                document.getElementById("bubbleOne").style.background = "#E3E6F3";
                document.getElementById("bubbleTwo").style.top = "12.5%";
                document.getElementById("bubbleTwo").style.top = "14.5%";
                document.getElementById("bubbleTwo").style.background = "#E3E6F3";
                document.getElementById("bubbleThree").style.top = "24%";
                document.getElementById("bubbleThree").style.top = "30%";
                document.getElementById("bubbleThree").style.background = "#E3E6F3";
                document.getElementById("bubbleFour").style.top = "36.5%";
                document.getElementById("bubbleFour").style.top = "45.5%";
                document.getElementById("bubbleFour").style.background = "#AACDF7";
                // document.getElementById("bubbleFive").style.top = "48%";
                // document.getElementById("bubbleFive").style.background = "#6DB3FA";
                document.getElementById("bubbleSix").style.top = "60.5%";
                document.getElementById("bubbleSix").style.top = "60.5%";
                document.getElementById("bubbleSix").style.background = "#1E90FF";
                document.getElementById("bubbleSeven").style.top = "73%";
                document.getElementById("bubbleSeven").style.top = "78%";
                document.getElementById("bubbleSeven").style.background = "#6DB3FA";
                // document.getElementById("bubbleEight").style.background = "#E3E6F3";
                // document.getElementById("bubbleEight").style.top = "85.5%";
                document.getElementById("bubbleNine").style.background = "#E3E6F3";
                document.getElementById("bubbleNine").style.top = "98%";
                document.getElementById("bubbleNine").style.top = "93%";
                if(document.documentElement.offsetWidth <= 1366 && document.documentElement.offsetWidth > 1280){
                  document.getElementById("bubbleOne").style.top = "0%";
                  document.getElementById("bubbleTwo").style.top = "15.5%";
                  document.getElementById("bubbleThree").style.top = "31%";
                  document.getElementById("bubbleFour").style.top = "46.5%";
                  document.getElementById("bubbleSix").style.top = "61.5%";
                  document.getElementById("bubbleSeven").style.top = "79%";
                  document.getElementById("bubbleNine").style.top = "95%";
                }
                else if(document.documentElement.offsetWidth <= 1280){
                  document.getElementById("bubbleOne").style.top = "0%";
                  document.getElementById("bubbleTwo").style.top = "14.5%";
                  document.getElementById("bubbleThree").style.top = "31%";
                  document.getElementById("bubbleFour").style.top = "45.5%";
                  document.getElementById("bubbleSix").style.top = "60.5%";
                  document.getElementById("bubbleSeven").style.top = "78%";
                  document.getElementById("bubbleNine").style.top = "94%";
                }
                else{
                  document.getElementById("bubbleOne").style.top = "-0%";
                  document.getElementById("bubbleTwo").style.top = "14.5%";
                  document.getElementById("bubbleThree").style.top = "30%";
                  document.getElementById("bubbleFour").style.top = "45.5%";
                  document.getElementById("bubbleSix").style.top = "60.5%";
                  document.getElementById("bubbleSeven").style.top = "78%";
                  document.getElementById("bubbleNine").style.top = "93%";
                }
                break;
        case "7":
                document.getElementById("gradDown").style.height = "75%";
                document.getElementById("gradUp").style.height = "25%";
                // document.getElementById("gradDown_2").style.height = "0%";
                // document.getElementById("gradUp_2").style.height = "100%";
                // document.getElementById("gradDown_2").style.background = "linear-gradient(0deg,#1E90FF 0%, #f4fdff 100%)";
                // document.getElementById("gradUp_2").style.background = "linear-gradient(180deg,#1E90FF 0%, #f4fdff 100%)";
                document.getElementById("gradDown").style.background = "linear-gradient(0deg,#1E90FF 0%, #f4fdff 100%)";
                document.getElementById("gradUp").style.background = "linear-gradient(180deg,#1E90FF 0%, #f4fdff 100%)";
                document.getElementById("bubbleOneRing").style.border = "1px solid transparent";
                document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
                document.getElementById("bubbleThreeRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFourRing").style.border = "1px solid transparent";
                // document.getElementById("bubbleFiveRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSixRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSevenRing").style.border = "1px solid #1E90FF";
                // document.getElementById("bubbleEightRing").style.border = "1px solid transparent";
                document.getElementById("bubbleNineRing").style.border = "1px solid #E3E6F3";

                document.getElementById("bubbleOne").style.top = "0%";
                document.getElementById("bubbleOne").style.top = "0%";
                document.getElementById("bubbleOne").style.background = "#E3E6F3";
                document.getElementById("bubbleTwo").style.top = "12.5%";
                document.getElementById("bubbleTwo").style.top = "14.5%";
                document.getElementById("bubbleTwo").style.background = "#E3E6F3";
                document.getElementById("bubbleThree").style.top = "24%";
                document.getElementById("bubbleThree").style.top = "30%";
                document.getElementById("bubbleThree").style.background = "#E3E6F3";
                document.getElementById("bubbleFour").style.top = "36.5%";
                document.getElementById("bubbleFour").style.top = "45.5%";
                document.getElementById("bubbleFour").style.background = "#E3E6F3";
                // document.getElementById("bubbleFive").style.top = "48%";
                // document.getElementById("bubbleFive").style.background = "#AACDF7";
                document.getElementById("bubbleSix").style.top = "60.5%";
                document.getElementById("bubbleSix").style.top = "60.5%";
                document.getElementById("bubbleSix").style.background = "#6DB3FA";
                document.getElementById("bubbleSeven").style.top = "72%";
                document.getElementById("bubbleSeven").style.top = "76%";
                document.getElementById("bubbleSeven").style.background = "#1E90FF";
                // document.getElementById("bubbleEight").style.background = "#6DB3FA";
                // document.getElementById("bubbleEight").style.top = "85.5%";
                document.getElementById("bubbleNine").style.background = "#E3E6F3";
                document.getElementById("bubbleNine").style.top = "98%";
                document.getElementById("bubbleNine").style.top = "93%";
                if(document.documentElement.offsetWidth <= 1366 && document.documentElement.offsetWidth > 1280){
                  document.getElementById("bubbleOne").style.top = "0%";
                  document.getElementById("bubbleTwo").style.top = "15.5%";
                  document.getElementById("bubbleThree").style.top = "31%";
                  document.getElementById("bubbleFour").style.top = "46.5%";
                  document.getElementById("bubbleSix").style.top = "61.5%";
                  document.getElementById("bubbleSeven").style.top = "78%";
                  document.getElementById("bubbleNine").style.top = "95%";
                }
                else if(document.documentElement.offsetWidth <= 1280){
                  document.getElementById("bubbleOne").style.top = "0%";
                  document.getElementById("bubbleTwo").style.top = "14.5%";
                  document.getElementById("bubbleThree").style.top = "31%";
                  document.getElementById("bubbleFour").style.top = "45.5%";
                  document.getElementById("bubbleSix").style.top = "61.5%";
                  document.getElementById("bubbleSeven").style.top = "77%";
                  document.getElementById("bubbleNine").style.top = "94%";
                }
                else{
                  document.getElementById("bubbleOne").style.top = "-0%";
                  document.getElementById("bubbleTwo").style.top = "14.5%";
                  document.getElementById("bubbleThree").style.top = "30%";
                  document.getElementById("bubbleFour").style.top = "45.5%";
                  document.getElementById("bubbleSix").style.top = "60.5%";
                  document.getElementById("bubbleSeven").style.top = "76%";
                  document.getElementById("bubbleNine").style.top = "93%";
                }
                break;
        case "8":
                document.getElementById("gradDown").style.height = "86%";
                document.getElementById("gradUp").style.height = "14%";
                // document.getElementById("gradDown_2").style.height = "50%";
                // document.getElementById("gradUp_2").style.height = "50%";
                // document.getElementById("gradDown_2").style.background = "linear-gradient(0deg,#1E90FF 0%, #f4fdff 100%)";
                // document.getElementById("gradUp_2").style.background = "linear-gradient(180deg,#1E90FF 0%, #f4fdff 100%)";
                document.getElementById("gradDown").style.background = "linear-gradient(0deg,#E3E6F3 0%, #f4fdff 100%)";
                document.getElementById("gradUp").style.background = "linear-gradient(180deg,#E3E6F3 0%, #f4fdff 100%)";
                document.getElementById("bubbleOneRing").style.border = "1px solid transparent";
                document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
                document.getElementById("bubbleThreeRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFourRing").style.border = "1px solid transparent";
                // document.getElementById("bubbleFiveRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSixRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSevenRing").style.border = "1px solid transparent";
                // document.getElementById("bubbleEightRing").style.border = "1px solid #1E90FF";
                document.getElementById("bubbleNineRing").style.border = "1px solid #E3E6F3";

                document.getElementById("bubbleOne").style.top = "0%";
                document.getElementById("bubbleOne").style.background = "#E3E6F3";
                document.getElementById("bubbleTwo").style.top = "12.5%";
                document.getElementById("bubbleTwo").style.background = "#E3E6F3";
                document.getElementById("bubbleThree").style.top = "24%";
                document.getElementById("bubbleThree").style.background = "#E3E6F3";
                document.getElementById("bubbleFour").style.top = "36.5%";
                document.getElementById("bubbleFour").style.background = "#E3E6F3";
                // document.getElementById("bubbleFive").style.top = "48%";
                // document.getElementById("bubbleFive").style.background = "#E3E6F3";
                document.getElementById("bubbleSix").style.top = "60.5%";
                document.getElementById("bubbleSix").style.background = "#AACDF7";
                document.getElementById("bubbleSeven").style.top = "72%";
                document.getElementById("bubbleSeven").style.background = "#6DB3FA";
                // document.getElementById("bubbleEight").style.background = "#1E90FF";
                // document.getElementById("bubbleEight").style.top = "84.5%";
                document.getElementById("bubbleNine").style.background = "#E3E6F3";
                document.getElementById("bubbleNine").style.top = "98%";
                break;
        case "9":
                document.getElementById("gradDown").style.height = "95%";
                document.getElementById("gradUp").style.height = "0%";
                // document.getElementById("gradDown_2").style.height = "100%";
                // document.getElementById("gradUp_2").style.height = "0%";
                // document.getElementById("gradDown_2").style.background = "linear-gradient(0deg,#1E90FF 0%, #f4fdff 100%)";
                // document.getElementById("gradUp_2").style.background = "linear-gradient(180deg,#1E90FF 0%, #f4fdff 100%)";
                document.getElementById("bubbleOneRing").style.border = "1px solid transparent";
                document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
                document.getElementById("bubbleThreeRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFourRing").style.border = "1px solid transparent";
                // document.getElementById("bubbleFiveRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSixRing").style.border = "1px solid transparent";
                document.getElementById("bubbleSevenRing").style.border = "1px solid transparent";
                // document.getElementById("bubbleEightRing").style.border = "1px solid transparent";
                document.getElementById("bubbleNineRing").style.border = "1px solid #1E90FF";

                document.getElementById("bubbleOne").style.top = "0%";
                document.getElementById("bubbleOne").style.top = "0%";
                document.getElementById("bubbleOne").style.background = "#E3E6F3";
                document.getElementById("bubbleTwo").style.top = "12.5%";
                document.getElementById("bubbleTwo").style.top = "14.5%";
                document.getElementById("bubbleTwo").style.background = "#E3E6F3";
                document.getElementById("bubbleThree").style.top = "24%";
                document.getElementById("bubbleThree").style.top = "30%";
                document.getElementById("bubbleThree").style.background = "#E3E6F3";
                document.getElementById("bubbleFour").style.top = "36.5%";
                document.getElementById("bubbleFour").style.top = "45.5%";
                document.getElementById("bubbleFour").style.background = "#E3E6F3";
                // document.getElementById("bubbleFive").style.top = "48%";
                // document.getElementById("bubbleFive").style.background = "#E3E6F3";
                document.getElementById("bubbleSix").style.top = "60.5%";
                document.getElementById("bubbleSix").style.top = "60.5%";
                document.getElementById("bubbleSix").style.background = "#E3E6F3";
                document.getElementById("bubbleSeven").style.top = "72%";
                document.getElementById("bubbleSeven").style.top = "76%";
                document.getElementById("bubbleSeven").style.background = "#AACDF7";
                // document.getElementById("bubbleEight").style.background = "#6DB3FA";
                // document.getElementById("bubbleEight").style.top = "84.5%";
                document.getElementById("bubbleNine").style.background = "#1E90FF";
                document.getElementById("bubbleNine").style.top = "97%";
                document.getElementById("bubbleNine").style.top = "92%";
                if(document.documentElement.offsetWidth <= 1366 && document.documentElement.offsetWidth > 1280){
                  document.getElementById("bubbleOne").style.top = "0%";
                  document.getElementById("bubbleTwo").style.top = "15.5%";
                  document.getElementById("bubbleThree").style.top = "31%";
                  document.getElementById("bubbleFour").style.top = "46.5%";
                  document.getElementById("bubbleSix").style.top = "62.5%";
                  document.getElementById("bubbleSeven").style.top = "77%";
                  document.getElementById("bubbleNine").style.top = "93%";
                }
                else if(document.documentElement.offsetWidth <= 1280){
                  document.getElementById("bubbleOne").style.top = "0%";
                  document.getElementById("bubbleTwo").style.top = "14.5%";
                  document.getElementById("bubbleThree").style.top = "31%";
                  document.getElementById("bubbleFour").style.top = "45.5%";
                  document.getElementById("bubbleSix").style.top = "61.5%";
                  document.getElementById("bubbleSeven").style.top = "77%";
                  document.getElementById("bubbleNine").style.top = "94%";
                }
                else{
                  document.getElementById("bubbleOne").style.top = "-0%";
                  document.getElementById("bubbleTwo").style.top = "14.5%";
                  document.getElementById("bubbleThree").style.top = "30%";
                  document.getElementById("bubbleFour").style.top = "45.5%";
                  document.getElementById("bubbleSix").style.top = "60.5%";
                  document.getElementById("bubbleSeven").style.top = "76%";
                  document.getElementById("bubbleNine").style.top = "92%";
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

  sideNavMobile(sectionName){
    // let listArray: string[] = ['section1_mobile','section2_mobile','section3_mobile','section4_mobile','section5_mobile','section6_mobile','section7_mobile','section8_mobile','section9_mobile']
    let listArray: string[] = ['section1_mobile','section2_mobile','section3_mobile','section4_mobile','section6_mobile','section7_mobile','section9_mobile']
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
      case 'section8_mobile': document.getElementById(sectionName).className += " sideNav-mobile-select";
              break;
      case 'section9_mobile': document.getElementById(sectionName).className += " sideNav-mobile-select";
              break;
      default:break;
    }
  }

  hubspotInit(){
    document.getElementById("/telegram").click();
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

    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    var limit = vh * 1/2
    // console.log(limit)
    // console.log(section1)
    // console.log(section2)
    // console.log(section3)
    // console.log(section4)
    // console.log(section5)
    // console.log(section6)
    // console.log(section7)
    if(section1 < limit && section1 > 0 && !this.isSkip){
      this.sideNavAnimate("1","sectionOne_2");
      this.sideNavMobile("section1_mobile")
    }
    else if(section2 < limit && section2 > 0 && !this.isSkip){
      this.sideNavAnimate("2","sectionTwo");
      this.sideNavMobile("section2_mobile")
    }
    else if(section3 < limit && section3 > 0 && !this.isSkip){
      this.sideNavAnimate("3","sectionThree");
      this.sideNavMobile("section3_mobile")
    }
    else if(section4 < limit && section4 > 0 && !this.isSkip){
      this.sideNavAnimate("4","sectionFour");
      this.sideNavMobile("section4_mobile")
    }
    else if(section5 < limit && section5 > 0 && !this.isSkip){
      this.sideNavAnimate("6","sectionSix");
      this.sideNavMobile("section6_mobile")
    }
    else if(section6 < limit && section6 > 0 && !this.isSkip){
      this.sideNavAnimate("7","sectionSeven");
      this.sideNavMobile("section7_mobile")
    }
    else if(section7 < limit && section7 > 0 && !this.isSkip){
      this.sideNavAnimate("9","sectionNine");
      this.sideNavMobile("section9_mobile")
    }
  }

  public onIntersection1({ target, visible }: { target: Element; visible: boolean }): void {
    if(visible && !this.isSkip){
      // this.sideNavAnimate("1","sectionOne_2");
      // this.sideNavMobile("section1_mobile")
      // document.getElementById("sideNavContain").style.transform = "translate(4%)";
    }
  }
  public onIntersection2({ target, visible }: { target: Element; visible: boolean }): void {
    if(visible && !this.isSkip){
      // this.sideNavAnimate("2","sectionTwo");
      // this.sideNavMobile("section2_mobile")
      // document.getElementById("sideNavContain").style.transform = "translate(4%)";
    }
  }
  public onIntersection3({ target, visible }: { target: Element; visible: boolean }): void {
    if(visible && !this.isSkip){
      // this.sideNavAnimate("3","sectionThree");
      // this.sideNavMobile("section3_mobile")
      // document.getElementById("sideNavContain").style.transform = "translate(4%)";
    }
  }
  public onIntersection4({ target, visible }: { target: Element; visible: boolean }): void {
    if(visible && !this.isSkip){
      // this.sideNavAnimate("4","sectionFour");
      // this.sideNavMobile("section4_mobile")
      // document.getElementById("sideNavContain").style.transform = "translate(4%)";
    }
  }
  // public onIntersection5({ target, visible }: { target: Element; visible: boolean }): void {
  //   if(visible && !this.isSkip){
  //     // this.sideNavAnimate("5","sectionFive");
  //     // this.sideNavMobile("section5_mobile")
  //     // document.getElementById("sideNavContain").style.transform = "translate(4%)";
  //   }
  // }
  public onIntersection6({ target, visible }: { target: Element; visible: boolean }): void {
    if(visible && !this.isSkip){
      // this.sideNavAnimate("6","sectionSix");
      // this.sideNavMobile("section6_mobile")
      // document.getElementById("sideNavContain").style.transform = "translate(4%)";
    }
  }
  public onIntersection7({ target, visible }: { target: Element; visible: boolean }): void {
    if(visible && !this.isSkip){
      // this.sideNavAnimate("7","sectionSeven");
      // this.sideNavMobile("section7_mobile")
      // document.getElementById("sideNavContain").style.transform = "translate(4%)";
    }
  }
  // public onIntersection8({ target, visible }: { target: Element; visible: boolean }): void {
  //   if(visible && !this.isSkip){
  //     // this.sideNavAnimate("8","sectionEight");
  //     // this.sideNavMobile("section8_mobile")
  //     // document.getElementById("sideNavContain").style.transform = "translate(4%)";
  //   }
  // }
  public onIntersection9({ target, visible }: { target: Element; visible: boolean }): void {
    if(visible && !this.isSkip){
      // this.sideNavAnimate("9","sectionNine");
      // this.sideNavMobile("section9_mobile")
      // document.getElementById("sideNavContain").style.transform = "translate(4%)";
    }
  }
  public onIntersection10({ target, visible }: { target: Element; visible: boolean }): void {
    if(!visible){
        document.getElementById("sideNavContain").style.position = "sticky";
        document.getElementById("sideNavContain").style.width = "100%";
      }
      else if(visible){
        document.getElementById("sideNavContain").style.position = "relative";
        document.getElementById("sideNavContain").style.width = "100%";
      }
  }

  // @HostListener('window:scroll', ['$event'])
  // handleKeyDown(event: Scroll) {
  //   if(window.scrollY>document.getElementById("home_landing_section").offsetHeight+70){
  //         document.getElementById("sideNavContain").style.position = "sticky";
  //         document.getElementById("sideNavContain").style.width = "100%";
  //   }
  //   else{
  //         document.getElementById("sideNavContain").style.position = "relative";
  //         document.getElementById("sideNavContain").style.width = "100%";
  //   }
  // }
  

}
