import { Component, OnInit, HostListener } from '@angular/core';
import { FeeText } from '../fees';
import { Title }     from '@angular/platform-browser';
import { StatuscheckerService } from '../statuschecker.service';


@Component({
  selector: 'app-fee',
  templateUrl: './fee.component.html',
  styleUrls: ['./fee.component.css']
})
export class FeeComponent implements OnInit {

  constructor( public dynm : FeeText, public titleService: Title, public statusCheck :StatuscheckerService ) { }

  depositWithdrawal = [
    {
      "token":"BTC XLM XRP ETH",
      "network":"--",
      "d_fees":"0",
      "min_deposit":"1 USDT worth of tokens",
      "w_fees":"Required network fee",
      "min_withdraw":"No limit",
      "max_withdraw":"No limit",
    },
    {
      "token":"USDT USDC BUSD TUSD PAX DAI BAT",
      "network":"ERC20",
      "d_fees":"0",
      "min_deposit":"1 USDT worth of tokens",
      "w_fees":"Required network fee",
      "min_withdraw":"No limit",
      "max_withdraw":"No limit",
    },
  ]

  depositWithdrawalInr = [
    {
      "action":"Deposit",
      "mode":"RTGS / IMPS / NEFT",
      "fees":"0%",
      "min_amount":"INR 1",
      "max_amount":"No limit",
      "max_pro_time":"1 Business Day",
    },
    {
      "action":"Deposit",
      "mode":"UPI",
      "fees":"0%",
      "min_amount":"INR 1",
      "max_amount":"INR 1 Lakh",
      "max_pro_time":"Instant",
    },
    {
      "action":"Deposit",
      "mode":"Debit Cards",
      "fees":"0.59% (< INR 2000) / 1.18% (> INR 2000)",
      "min_amount":"INR 1",
      "max_amount":"INR 1 Lakh",
      "max_pro_time":"Instant",
    },
    {
      "action":"Deposit",
      "mode":"MobiKwik Wallet",
      "fees":"1.77%",
      "min_amount":"INR 1",
      "max_amount":"INR 1 Lakh",
      "max_pro_time":"Instant",
    },
    {
      "action":"Deposit",
      "mode":"Net Banking",
      "fees":"1.59% (SBI) / 1.88% (ICICI & HDFC) / 1.42% (Others)",
      "min_amount":"INR 1",
      "max_amount":"INR 1 Lakh",
      "max_pro_time":"Instant",
    },
    {
      "action":"Withdrawal",
      "mode":"RTGS / IMPS",
      "fees":"0%",
      "min_amount":"INR 1",
      "max_amount":"No Limit",
      "max_pro_time":"1 Business Day",
    },
  ]

  tradingFee = [
    {
      "pair":"All Token Pairs",
      "make_fee":"0.1%",
      "take_fee":"0.1%",
      "min_trade_val":"10 USDT worth of tokens",
    }
  ]

  interestRates = [
    {
      "token":"BTC",
      "sav_rate":"7%",
      "fd_rate":"9%",
      "borrow_rate":"11%",
    },
    {
      "token":"XLM",
      "sav_rate":"7%",
      "fd_rate":"9%",
      "borrow_rate":"11%",
    },
    {
      "token":"XRP",
      "sav_rate":"7%",
      "fd_rate":"9%",
      "borrow_rate":"11%",
    },
    {
      "token":"ETH",
      "sav_rate":"7%",
      "fd_rate":"9%",
      "borrow_rate":"11%",
    },
    {
      "token":"USDT",
      "sav_rate":"7%",
      "fd_rate":"9%",
      "borrow_rate":"11%",
    },
    {
      "token":"USDC",
      "sav_rate":"7%",
      "fd_rate":"9%",
      "borrow_rate":"11%",
    },
    {
      "token":"BUSD",
      "sav_rate":"7%",
      "fd_rate":"9%",
      "borrow_rate":"11%",
    },
    {
      "token":"TUSD",
      "sav_rate":"9%",
      "fd_rate":"9%",
      "borrow_rate":"13%",
    },
    {
      "token":"PAX",
      "sav_rate":"7%",
      "fd_rate":"9%",
      "borrow_rate":"11%",
    },
    {
      "token":"DAI",
      "sav_rate":"9%",
      "fd_rate":"9%",
      "borrow_rate":"13%",
    },
    {
      "token":"BAT",
      "sav_rate":"9%",
      "fd_rate":"9%",
      "borrow_rate":"13%",
    },
  ]
  previousSection = "sectionOne";
  isSkip = false;

  ngOnInit() {
    document.getElementById("bubbleOneRing").style.border = "1px solid #1E90FF";
    this.titleService.setTitle('Fees - Bank of Hodlers');
    this.statusCheck.onRefreashUrlChecker();
  }

  sideNavAnimate(percen, tag){
    // let listArray: string[] = ['sectionOne','sectionTwo','sectionThree','sectionFour']
    let listArray: string[] = ['sectionOne','sectionTwo','sectionFour']
    this.isSkippingSection(listArray, tag)
    this.previousSection = tag
    for (let entry of listArray) {
      document.getElementById(entry).classList.remove("select");
    }
    if(document.documentElement.offsetWidth <= 1440){
      document.getElementById("sidenav").style.marginBottom = "3.5vh"
    }
    else{
      document.getElementById("sidenav").style.marginBottom = "3vh"
    }
    switch(tag){
      case 'sectionOne': document.getElementById(tag).className += " select";
              break;
      case 'sectionTwo': document.getElementById(tag).className += " select";
              break;
      case 'sectionThree': document.getElementById(tag).className += " select";
              break;
      case 'sectionFour': document.getElementById(tag).className += " select";
              break;
      default:break;
    }
    document.getElementById("sidenav").style.marginBottom = "3.5vh";
    switch(percen){
        case "1":
                document.getElementById("gradDown").style.height = "0%";
                document.getElementById("gradDown").style.display = "block";
                document.getElementById("gradUp").style.height = "100%";
                document.getElementById("bubbleOneRing").style.border = "1px solid #1E90FF";
                document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
                // document.getElementById("bubbleThreeRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFourRing").style.border = "1px solid #eae9e9";


                document.getElementById("bubbleOne").style.top = "0%";
                document.getElementById("bubbleOne").style.background = "#1E90FF";
                document.getElementById("bubbleTwo").style.top = "33%";
                document.getElementById("bubbleTwo").style.background = "#9AC6F8";
                // document.getElementById("bubbleThree").style.top = "65%";
                // document.getElementById("bubbleThree").style.background = "#BDD6F6";
                document.getElementById("bubbleFour").style.top = "97%";
                document.getElementById("bubbleFour").style.background = "#E3E6F3";
                if(document.documentElement.offsetWidth <= 1440 && document.documentElement.offsetWidth > 1366){
                  document.getElementById("bubbleTwo").style.top = "62%";
                  // document.getElementById("bubbleThree").style.top = "71%";
                }
                else if(document.documentElement.offsetWidth <= 1366 && document.documentElement.offsetWidth > 1280){
                  document.getElementById("bubbleTwo").style.top = "57%";
                  // document.getElementById("bubbleThree").style.top = "68%";
                  document.getElementById("bubbleFour").style.top = "93%";
                }
                else if(document.documentElement.offsetWidth <= 1280 && document.documentElement.offsetWidth > 1024){
                    document.getElementById("bubbleTwo").style.top = "60%";
                    // document.getElementById("bubbleThree").style.top = "70%";
                }
                else{
                  document.getElementById("bubbleTwo").style.top = "50%";
                  // document.getElementById("bubbleThree").style.top = "65%";
                }
                break;
        case "2":
                document.getElementById("gradDown").style.height = "35%";
                document.getElementById("gradUp").style.height = "65%";
                document.getElementById("bubbleOneRing").style.border = "1px solid transparent";
                document.getElementById("bubbleTwoRing").style.border = "1px solid #1E90FF";
                // document.getElementById("bubbleThreeRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFourRing").style.border = "1px solid #eae9e9";


                // document.getElementById("bubbleOne").style.top = "-6px";
                document.getElementById("bubbleOne").style.background = "#BDD6F6";
                document.getElementById("bubbleTwo").style.top = "33%";
                document.getElementById("bubbleTwo").style.background = "#1E90FF";
                // document.getElementById("bubbleThree").style.top = "65%";
                // document.getElementById("bubbleThree").style.background = "#7CB9F9";
                // document.getElementById("bubbleFour").style.top = "107px";
                document.getElementById("bubbleFour").style.background = "#E3E6F3";
                if(document.documentElement.offsetWidth <= 1440 && document.documentElement.offsetWidth > 1366){
                  document.getElementById("bubbleTwo").style.top = "45%";
                  // document.getElementById("bubbleThree").style.top = "67%";
                }
                else if(document.documentElement.offsetWidth <= 1366 && document.documentElement.offsetWidth > 1280){
                  document.getElementById("bubbleOne").style.top = "0%";
                  document.getElementById("bubbleTwo").style.top = "42%";
                  // document.getElementById("bubbleThree").style.top = "62%";
                  document.getElementById("bubbleFour").style.top = "92%";
                }
                else if(document.documentElement.offsetWidth <= 1280){
                  document.getElementById("bubbleTwo").style.top = "44%";
                  // document.getElementById("bubbleThree").style.top = "65%";
                }
                else{
                  document.getElementById("bubbleTwo").style.top = "44%";
                  // document.getElementById("bubbleThree").style.top = "65%";
                }
                break;
        case "3":
                document.getElementById("gradDown").style.height = "74%";
                document.getElementById("gradUp").style.height = "26%";
                document.getElementById("bubbleOneRing").style.border = "1px solid transparent";
                document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
                // document.getElementById("bubbleThreeRing").style.border = "1px solid #1E90FF";
                document.getElementById("bubbleFourRing").style.border = "1px solid #eae9e9";

                // document.getElementById("bubbleOne").style.top = "-6px";
                document.getElementById("bubbleOne").style.background = "#BDD6F6";
                document.getElementById("bubbleTwo").style.top = "30%";
                document.getElementById("bubbleTwo").style.background = "#8DC0F8";
                // document.getElementById("bubbleThree").style.top = "62%";
                // document.getElementById("bubbleThree").style.background = "#1E90FF";
                // document.getElementById("bubbleFour").style.top = "107px";
                document.getElementById("bubbleFour").style.background = "#E3E6F3";
                if(document.documentElement.offsetWidth <= 1366 && document.documentElement.offsetWidth > 1280){
                  document.getElementById("bubbleTwo").style.top = "30%";
                  // document.getElementById("bubbleThree").style.top = "59%";
                  document.getElementById("bubbleFour").style.top = "92%";
                }
                else{
                  document.getElementById("bubbleTwo").style.top = "30%";
                  // document.getElementById("bubbleThree").style.top = "62%";
                  document.getElementById("bubbleFour").style.top = "97%";
                }
                break;
        case "4":
                document.getElementById("gradDown").style.height = "100%";
                document.getElementById("gradUp").style.height = "0%";
                document.getElementById("bubbleOneRing").style.border = "1px solid transparent";
                document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
                // document.getElementById("bubbleThreeRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFourRing").style.border = "1px solid #1E90FF";

                // document.getElementById("bubbleOne").style.top = "-6px";
                document.getElementById("bubbleOne").style.background = "#E3E6F3";
                // document.getElementById("bubbleTwo").style.top = "30px";
                document.getElementById("bubbleTwo").style.background = "#CADCF5";
                // document.getElementById("bubbleThree").style.top = "66px";
                // document.getElementById("bubbleThree").style.background = "#9AC6F8";
                document.getElementById("bubbleFour").style.background = "#1E90FF";
                if(document.documentElement.offsetWidth <= 1440 && document.documentElement.offsetWidth > 1366){
                  document.getElementById("bubbleTwo").style.top = "43%";
                  document.getElementById("bubbleFour").style.top = "96%";
                }
                else if(document.documentElement.offsetWidth <= 1366 && document.documentElement.offsetWidth > 1280){
                  document.getElementById("sidenav").style.marginBottom = "4.5vh";
                }
                else if(document.documentElement.offsetWidth <= 1280 && document.documentElement.offsetWidth > 1024){
                  document.getElementById("bubbleFour").style.top = "89%";
                }
                else{
                  document.getElementById("bubbleTwo").style.top = "31%";
                  document.getElementById("bubbleTwo").style.top = "46%";
                  document.getElementById("bubbleFour").style.top = "96%";
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
    let listArray: string[] = ['section1_mobile','section2_mobile','section4_mobile']
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
      // this.sideNavAnimate("1","sectionOne");
      // this.sideNavMobile('section1_mobile');
      // document.getElementById("sideNavContain").style.transform = "translate(0%)";
    }
  }
  public onIntersection2({ target, visible }: { target: Element; visible: boolean }): void {
    if(visible && !this.isSkip){
      // this.sideNavAnimate("2","sectionTwo");
      // this.sideNavMobile('section2_mobile');
      // document.getElementById("sideNavContain").style.transform = "translate(0%)";
    }
  }
  public onIntersection3({ target, visible }: { target: Element; visible: boolean }): void {
    if(visible && !this.isSkip){
      // this.sideNavAnimate("3","sectionThree");
      // this.sideNavMobile('section3_mobile');
      // document.getElementById("sideNavContain").style.transform = "translate(0%)";
    }
  }
  public onIntersection4({ target, visible }: { target: Element; visible: boolean }): void {
    if(visible && !this.isSkip){
      // this.sideNavAnimate("4","sectionFour");
      // this.sideNavMobile('section4_mobile');
      // document.getElementById("sideNavContain").style.transform = "translate(0%)";
    }
  }

  @HostListener('window:scroll', ['$event'])
  srcollHandler(event) {
    var section1 = document.getElementById("sectionDiv1").getBoundingClientRect().top
    var section2 = document.getElementById("sectionDiv2").getBoundingClientRect().top
    var section3 = document.getElementById("sectionDiv3").getBoundingClientRect().top

    var section1bound = document.getElementById("sectionDiv1").offsetHeight + section1 -200
    var section2bound = document.getElementById("sectionDiv2").offsetHeight + section2 -200
    var section3bound = document.getElementById("sectionDiv3").offsetHeight + section3 -200



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
      this.sideNavAnimate("1","sectionOne");
      this.sideNavMobile('section1_mobile');
    }
    else if(section2 < limit && section2bound > 0 && !this.isSkip){
      this.sideNavAnimate("2","sectionTwo");
      this.sideNavMobile('section2_mobile');
    }
    else if(section3 < limit && section3bound > 0 && !this.isSkip){
      this.sideNavAnimate("4","sectionFour");
      this.sideNavMobile('section4_mobile');
    }

  }

}
