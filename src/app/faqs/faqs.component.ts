import { Component, OnInit } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { FaqsText } from '../faqstext';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { trigger, style, animate, transition } from '@angular/animations';
import { StatuscheckerService } from '../statuschecker.service';


@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%) rotate(90deg) scale(.5)', opacity: 0}))
        ])
      ]
    ),
    trigger(
      'arrocdianAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('500ms', style({transform: 'rotate(0deg) scale(1)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'rotate(90deg) translate(-80%,-20%) scale(1.5)', opacity: 0}))
        ])
      ]
    ),
    trigger(
      'arrocdianAnimationOpen', [
        transition(':enter', [
          style({opacity: 0}),
          animate('500ms', style({opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('500ms', style({ opacity: 0}))
        ])
      ]
    ),
  ],
})
export class FaqsComponent implements OnInit {

  constructor( public dynm : FaqsText, public statusCheck :StatuscheckerService, public route: ActivatedRoute, public titleService : Title  ) {}

   activeIdsEI: string[] = [];
   activeIdsTrad: string[] = [];
   activeIdsDepWith: string[] = [];
   activeIdsComp: string[] = [];
   activeIdsFees: string[] = [];

   displayFaqEI = [];
   displayFaqTrad = [];
   displayFaqDepWith = [];
   displayFaqComp = [];
   displayFaqFees = [];
   searchToken : any;
   isSearching :boolean = false;
   isSearchingNotFound :boolean = false;
   sub :any;
   previousSection = "sectionOne";
   isSkip = false;

  ngOnInit() {
    this.statusCheck.onRefreashUrlChecker();
    this.titleService.setTitle('Faqs - Bank of Hodlers');
    document.getElementById("bubbleOneRing").style.border = "1px solid #1E90FF";
    this.dataReloader();
    this.sub = this.route.queryParams.subscribe(params=>{
      if(params['faq_qid'] != null && params['faq_qid'] != "" && params['faq_qid'] != undefined){
        this.activeQuestion(params['faq_qid'])
      }
      else if(params['search_token'] != null && params['search_token'] != "" && params['search_token'] != undefined){
        this.searcherWithToken(params['search_token'])
      }
    })
  }
  // Side nav animations controller
  sideNavAnimate(percen, tag){
    let listArray: string[] = ['sectionOne','sectionTwo','sectionThree','sectionFour','sectionFive']
    this.isSkippingSection(listArray, tag)
    this.previousSection = tag
    for (let entry of listArray) {
      document.getElementById(entry).classList.remove("select");
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
      case 'sectionFive': document.getElementById(tag).className += " select";
              break;
      default:break;
    }
    if(document.documentElement.offsetWidth <= 1366){
      document.getElementById("sidenav").style.marginBottom = "28px";
    }
    else{
      document.getElementById("sidenav").style.marginBottom = "3vh";
    }
    switch(percen){
        case "1":
                document.getElementById("gradDown").style.height = "0%";
                document.getElementById("gradDown").style.display = "block";
                document.getElementById("gradUp").style.height = "100%";
                document.getElementById("sidenav").style.marginTop = "1vh";
                document.getElementById("bubbleOneRing").style.border = "1px solid #1E90FF";
                document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
                document.getElementById("bubbleThreeRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFourRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFiveRing").style.border = "1px solid #eae9e9";

                document.getElementById("bubbleOne").style.top = "0%";
                document.getElementById("bubbleOne").style.background = "#1E90FF";
                document.getElementById("bubbleTwo").style.background = "#9AC6F8";
                document.getElementById("bubbleThree").style.top = "50%";
                document.getElementById("bubbleThree").style.background = "#BDD6F6";
                
                document.getElementById("bubbleFour").style.background = "#E3E6F3";
                document.getElementById("bubbleFive").style.top = "97%";
                document.getElementById("bubbleFive").style.background = "#E3E6F3";
                if(document.documentElement.offsetWidth <= 1440){
                  document.getElementById("bubbleTwo").style.top = "24%";
                  document.getElementById("bubbleFour").style.top = "76%";
                  document.getElementById("bubbleThree").style.top = "54%";
                }
                else{
                  document.getElementById("bubbleTwo").style.top = "26%";
                  document.getElementById("bubbleFour").style.top = "74%";
                }

                break;
        case "2":
                document.getElementById("gradDown").style.height = "28%";
                document.getElementById("gradUp").style.height = "72%";
                document.getElementById("sidenav").style.marginTop = "1vh";
                document.getElementById("bubbleOneRing").style.border = "1px solid transparent";
                document.getElementById("bubbleTwoRing").style.border = "1px solid #1E90FF";
                document.getElementById("bubbleThreeRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFourRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFiveRing").style.border = "1px solid #eae9e9";


                // document.getElementById("bubbleOne").style.top = "-6px";
                document.getElementById("bubbleOne").style.background = "#EEF0F8";
                document.getElementById("bubbleTwo").style.top = "24%";
                document.getElementById("bubbleTwo").style.background = "#1E90FF";
                // document.getElementById("bubbleThree").style.top = "70px";
                document.getElementById("bubbleThree").style.background = "#7CB9F9";
                // document.getElementById("bubbleFour").style.top = "107px";
                document.getElementById("bubbleFour").style.background = "#A2CAF7";
                // document.getElementById("bubbleFive").style.top = "107px";
                document.getElementById("bubbleFive").style.top = "97%";
                document.getElementById("bubbleFive").style.background = "#C5D9F5";
                if(document.documentElement.offsetWidth <= 1440){
                  document.getElementById("bubbleTwo").style.top = "23%";
                  document.getElementById("bubbleFour").style.top = "77%";
                  document.getElementById("bubbleThree").style.top = "54%";
                }
                else{
                  document.getElementById("bubbleTwo").style.top = "24%";
                  document.getElementById("bubbleFour").style.top = "74%";
                }

                break;
        case "3":
                document.getElementById("gradDown").style.height = "52%";
                document.getElementById("gradUp").style.height = "48%";
                document.getElementById("bubbleOneRing").style.border = "1px solid transparent";
                document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
                document.getElementById("bubbleThreeRing").style.border = "1px solid #1E90FF";
                document.getElementById("bubbleFourRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFiveRing").style.border = "1px solid #eae9e9";


                // document.getElementById("bubbleOne").style.top = "-6px";
                document.getElementById("bubbleOne").style.background = "#EEF0F8";
                document.getElementById("bubbleTwo").style.top = "21%";
                document.getElementById("bubbleTwo").style.background = "#8DC0F8";
                document.getElementById("bubbleThree").style.top = "48%";
                document.getElementById("bubbleThree").style.background = "#1E90FF";
                document.getElementById("bubbleFour").style.top = "72%";
                document.getElementById("bubbleFour").style.background = "#64AFFB";
                // document.getElementById("bubbleFive").style.top = "107px";
                document.getElementById("bubbleFive").style.top = "97%";
                document.getElementById("bubbleFive").style.background = "#E3E6F3";
                if(document.documentElement.offsetWidth <= 1440){
                  document.getElementById("bubbleFour").style.top = "78%";
                  document.getElementById("bubbleTwo").style.top = "23%";
                  document.getElementById("bubbleThree").style.top = "52%";
                }
                else{
                  document.getElementById("bubbleFour").style.top = "74%";
                }

                break;
        case "4":
                document.getElementById("gradDown").style.height = "75%";
                document.getElementById("gradUp").style.height = "25%";
                document.getElementById("bubbleOneRing").style.border = "1px solid transparent";
                document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
                document.getElementById("bubbleThreeRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFourRing").style.border = "1px solid #1E90FF";
                document.getElementById("bubbleFiveRing").style.border = "1px solid #eae9e9";


                // document.getElementById("bubbleOne").style.top = "-6px";
                document.getElementById("bubbleOne").style.background = "#E3E6F3";
                // document.getElementById("bubbleTwo").style.top = "30px";
                document.getElementById("bubbleTwo").style.background = "#CADCF5";
                // document.getElementById("bubbleThree").style.top = "66px";
                document.getElementById("bubbleThree").style.background = "#73B5FA";
                document.getElementById("bubbleFour").style.top = "72%";
                document.getElementById("bubbleFour").style.background = "#1E90FF";
                // document.getElementById("bubbleFive").style.top = "107px";
                document.getElementById("bubbleFive").style.top = "97%";
                document.getElementById("bubbleFive").style.background = "#E3E6F3";
                if(document.documentElement.offsetWidth <= 1440){
                  document.getElementById("bubbleFour").style.top = "74%";
                }
                else{
                  document.getElementById("bubbleFour").style.top = "71%";
                }

                break;
        case "5":
                document.getElementById("gradDown").style.height = "100%";
                document.getElementById("gradUp").style.height = "0%";
                document.getElementById("bubbleOneRing").style.border = "1px solid #eae9e9";
                document.getElementById("bubbleTwoRing").style.border = "1px solid transparent";
                document.getElementById("bubbleThreeRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFourRing").style.border = "1px solid transparent";
                document.getElementById("bubbleFiveRing").style.border = "1px solid #1E90FF";


                // document.getElementById("bubbleOne").style.top = "-6px";
                document.getElementById("bubbleOne").style.background = "#E3E6F3";
                // document.getElementById("bubbleTwo").style.top = "30px";
                document.getElementById("bubbleTwo").style.background = "#C5D9F5";
                // document.getElementById("bubbleThree").style.top = "66px";
                document.getElementById("bubbleThree").style.background = "#AACDF7";
                // document.getElementById("bubbleFour").style.top = "103px";
                document.getElementById("bubbleFour").style.background = "#4FA6FC";
                document.getElementById("bubbleFive").style.top = "96%";
                document.getElementById("bubbleFive").style.background = "#1E90FF";
                if(document.documentElement.offsetWidth <= 1440 && document.documentElement.offsetWidth > 1280){
                  document.getElementById("bubbleFour").style.top = "74%";
                  document.getElementById("bubbleFive").style.top = "95%";
                }
                else if(document.documentElement.offsetWidth <= 1280){
                  document.getElementById("gradDown").style.top = "99%";
                }
                else{
                  document.getElementById("bubbleFour").style.top = "72%";
                  document.getElementById("bubbleFive").style.top = "96%";
                }

                break;
      default:
                break;
    }
  }

  // To check if users has selected a distant section to skip side nav animation
  isSkippingSection(listArray: string[], tag: any) {
    if(Math.abs(listArray.indexOf(tag) - listArray.indexOf(this.previousSection)) >= 2){
      this.isSkip = true;
      setTimeout(() =>{
        this.isSkip = false
      },2000)
    }
    else{
      this.isSkip = false
    }
  } 

  activeQuestion(faqId: any) {
    this.activeIdsEI = [faqId]
    this.activeIdsTrad = [faqId]
    this.activeIdsDepWith = [faqId]
    this.activeIdsComp = [faqId]
    this.activeIdsFees = [faqId]
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // To load data from ts file and to refreash display data
  dataReloader(){
    this.displayFaqEI = this.dynm.faqsInterest;
    this.displayFaqTrad = this.dynm.faqsTrading;
    this.displayFaqDepWith = this.dynm.faqsDepositWithDrawals;
    this.displayFaqComp = this.dynm.faqsCompany;
    this.displayFaqFees = this.dynm.faqsFees;
    
  }

  // To Clear search field
  searcherClose(){
    this.isSearching = false;
    this.isSearchingNotFound = false;
    this.searchToken = "";
    (<HTMLInputElement>document.getElementById("searchToken")).value = "";
    this.dataReloader()
    this.titleService.setTitle('Faq - Bank of Hodlers');
    this.activeIdsEI = [];
    this.activeIdsTrad = [];
    this.activeIdsDepWith = [];
    this.activeIdsComp = [];
    this.activeIdsFees = [];
  }

  // Searching on FAQs with text from search input
  searcher(){
    var temp = [];
    this.isSearching = true;
    this.isSearchingNotFound = false;
    var searchTokenCur = (<HTMLInputElement>document.getElementById("searchToken")).value;
    this.searchToken = '"'+searchTokenCur+'"';
    this.titleService.setTitle(searchTokenCur +' - Faqs - Bank of Hodlers');
    this.dataReloader()
    if(!searchTokenCur){
      this.searcherClose()
    }

    // Searching in Interest Data
    for( let ele of this.displayFaqEI){
      if(ele.ques.toLowerCase().includes(searchTokenCur.toLowerCase())  || ele.answer.toLowerCase().includes(searchTokenCur.toLowerCase())){
        temp.push(ele);
      }
    }
    this.displayFaqEI = []
    this.displayFaqEI = temp;
    // for( let ele of this.displayFaqEI){
    //   if(ele.ques.toLowerCase().includes(searchTokenCur.toLowerCase()) || ele.answer.toLowerCase().includes(searchTokenCur.toLowerCase())){
    //     this.activeIdsEI = [ele.id];
    //     break;
    //   }
    // }
    temp = [];

    // Searching in Trading Data
    for( let ele of this.displayFaqTrad){
      if(ele.ques.toLowerCase().includes(searchTokenCur.toLowerCase()) || ele.answer.toLowerCase().includes(searchTokenCur.toLowerCase())){
        temp.push(ele);
      }
    }
    this.displayFaqTrad = []
    this.displayFaqTrad = temp;
    // for( let ele of this.displayFaqTrad){
    //   if(ele.ques.toLowerCase().includes(searchTokenCur.toLowerCase())  || ele.answer.toLowerCase().includes(searchTokenCur.toLowerCase())){
    //     this.activeIdsTrad = [ele.id];
    //     break;
    //   }
    // }
    temp = [];

    // Searching in Deposits & Withdrawals Data
    for( let ele of this.displayFaqDepWith){
      if(ele.ques.toLowerCase().includes(searchTokenCur.toLowerCase()) || ele.answer.toLowerCase().includes(searchTokenCur.toLowerCase())){
        temp.push(ele);
      }
    }
    this.displayFaqDepWith = []
    this.displayFaqDepWith = temp;
    // for( let ele of this.displayFaqDepWith){
    //   if(ele.ques.toLowerCase().includes(searchTokenCur.toLowerCase()) || ele.answer.toLowerCase().includes(searchTokenCur.toLowerCase())){
    //     this.activeIdsDepWith = [ele.id];
    //     break;
    //   }
    // }
    temp = [];

    // Searching in Company Data
    for( let ele of this.displayFaqComp){
      if(ele.ques.toLowerCase().includes(searchTokenCur.toLowerCase()) || ele.answer.toLowerCase().includes(searchTokenCur.toLowerCase())){
        temp.push(ele);
      }
    }
    this.displayFaqComp = []
    this.displayFaqComp = temp;
    // for( let ele of this.displayFaqComp){
    //   if(ele.ques.toLowerCase().includes(searchTokenCur.toLowerCase()) || ele.answer.toLowerCase().includes(searchTokenCur.toLowerCase())){
    //     this.activeIdsComp = [ele.id];
    //     break;
    //   }
    // }
    temp = [];

    // Searching in Fees Data
    for( let ele of this.displayFaqFees){
      if(ele.ques.toLowerCase().includes(searchTokenCur.toLowerCase()) || ele.answer.toLowerCase().includes(searchTokenCur.toLowerCase())){
        temp.push(ele);
      }
    }
    this.displayFaqFees = []
    this.displayFaqFees = temp;
    // for( let ele of this.displayFaqFees){
    //   if(ele.ques.toLowerCase().includes(searchTokenCur.toLowerCase())  || ele.answer.toLowerCase().includes(searchTokenCur.toLowerCase())){
    //     this.activeIdsFees = [ele.id];
    //     break;
    //   }
    // }
    if(this.displayFaqFees.length==0 && this.displayFaqComp.length == 0 && this.displayFaqDepWith.length== 0 && this.displayFaqTrad.length== 0 && this.displayFaqEI.length== 0){
      this.isSearchingNotFound = true;
      this.isSearching = false;
    }
  }
  // Searching on FAQs with token from url 
  // url action string 'search_token'
  // eg: faq?search_token=fees
  searcherWithToken(token){
    var temp = [];
    this.isSearching = true;
    this.searchToken = '"'+token+'"';
    this.dataReloader()
    this.titleService.setTitle(token +' - Faqs - Bank of Hodlers');

    // Searching in Interest Data
    for( let ele of this.displayFaqEI){
      if(ele.ques.toLowerCase().includes(token.toLowerCase()) || ele.answer.toLowerCase().includes(token.toLowerCase())){
        temp.push(ele);
      }
    }
    this.displayFaqEI = []
    this.displayFaqEI = temp;
    for( let ele of this.displayFaqEI){
      if(ele.ques.toLowerCase().includes(token.toLowerCase()) || ele.answer.toLowerCase().includes(token.toLowerCase())){
        this.activeIdsEI = [ele.id];
        break;
      }
    }
    temp = [];

    // Searching in Trading Data
    for( let ele of this.displayFaqTrad){
      if(ele.ques.toLowerCase().includes(token.toLowerCase()) || ele.answer.toLowerCase().includes(token.toLowerCase())){
        temp.push(ele);
      }
    }
    this.displayFaqTrad = []
    this.displayFaqTrad = temp;
    for( let ele of this.displayFaqTrad){
      if(ele.ques.toLowerCase().includes(token.toLowerCase()) || ele.answer.toLowerCase().includes(token.toLowerCase())){
        this.activeIdsTrad = [ele.id];
        break;
      }
    }
    temp = [];

    // Searching in Deposits & Withdrawals Data
    for( let ele of this.displayFaqDepWith){
      if(ele.ques.toLowerCase().includes(token.toLowerCase()) || ele.answer.toLowerCase().includes(token.toLowerCase())){
        temp.push(ele);
      }
    }
    this.displayFaqDepWith = []
    this.displayFaqDepWith = temp;
    for( let ele of this.displayFaqDepWith){
      if(ele.ques.toLowerCase().includes(token.toLowerCase()) || ele.answer.toLowerCase().includes(token.toLowerCase())){
        this.activeIdsDepWith = [ele.id];
        break;
      }
    }
    temp = [];

    // Searching in Company Data
    for( let ele of this.displayFaqComp){
      if(ele.ques.toLowerCase().includes(token.toLowerCase()) || ele.answer.toLowerCase().includes(token.toLowerCase())){
        temp.push(ele);
      }
    }
    this.displayFaqComp = []
    this.displayFaqComp = temp;
    for( let ele of this.displayFaqComp){
      if(ele.ques.toLowerCase().includes(token.toLowerCase()) || ele.answer.toLowerCase().includes(token.toLowerCase())){
        this.activeIdsComp = [ele.id];
        break;
      }
    }
    temp = [];

    // Searching in Fees Data
    for( let ele of this.displayFaqFees){
      if(ele.ques.toLowerCase().includes(token.toLowerCase()) || ele.answer.toLowerCase().includes(token.toLowerCase())){
        temp.push(ele);
      }
    }
    this.displayFaqFees = []
    this.displayFaqFees = temp;
    for( let ele of this.displayFaqFees){
      if(ele.ques.toLowerCase().includes(token.toLowerCase()) || ele.answer.toLowerCase().includes(token.toLowerCase())){
        this.activeIdsFees = [ele.id];
        break;
      }
    }
  }
  // To animate side nav for 
  sideNavMobile(sectionName){
    let listArray: string[] = ['section1_mobile','section2_mobile','section3_mobile','section4_mobile','section5_mobile']
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
      default:break;
    }
  }
  // To check id the Display data is empty (INR Deposits & Withdrawals)
  isEmptyDisplayFaqTrad(){
    if(this.displayFaqTrad.length == 0){
      return false;
    }else{
      return true;
    }
  }
  // To check id the Display data is empty (Earning Interest)
  isEmptyDisplayFaqEI(){
    if(this.displayFaqEI.length == 0){
      return false;
    }else{
      return true;
    }
  }
  // To check id the Display data is empty (Deposits & Withdrawals)
  isEmptyDisplayFaqDepWith(){
    if(this.displayFaqDepWith.length == 0){
      return false;
    }else{
      return true;
    }
  }
  // To check id the Display data is empty (Other Product Queries)
  isEmptyDisplayFaqFees(){
    if(this.displayFaqFees.length == 0){
      return false;
    }else{
      return true;
    }
  }
  // To check id the Display data is empty (On the Company)
  isEmptyDisplayFaqComp(){
    if(this.displayFaqComp.length == 0){
      return false;
    }else{
      return true;
    }
  }
  // Code to trigger side nav animations when the associated section scrolls to viewport 
  public onIntersection1({ target, visible }: { target: Element; visible: boolean }): void {
    if(visible && !this.isSkip){
      this.sideNavAnimate("1","sectionOne");
      this.sideNavMobile('section1_mobile');
      document.getElementById("sideNavContain").style.transform = "translate(0%)";
    }
  }
  public onIntersection2({ target, visible }: { target: Element; visible: boolean }): void {
    if(visible && !this.isSkip){
      this.sideNavAnimate("2","sectionTwo");
      this.sideNavMobile('section2_mobile');
      document.getElementById("sideNavContain").style.transform = "translate(0%)";
    }
  }
  public onIntersection3({ target, visible }: { target: Element; visible: boolean }): void {
    if(visible && !this.isSkip){
      this.sideNavAnimate("3","sectionThree");
      this.sideNavMobile('section3_mobile');
      document.getElementById("sideNavContain").style.transform = "translate(0%)";
    }
  }
  public onIntersection4({ target, visible }: { target: Element; visible: boolean }): void {
    if(visible && !this.isSkip){
      this.sideNavAnimate("4","sectionFour");
      this.sideNavMobile('section4_mobile');
      document.getElementById("sideNavContain").style.transform = "translate(0%)";
    }
  }
  public onIntersection5({ target, visible }: { target: Element; visible: boolean }): void {
    if(visible && !this.isSkip){
      this.sideNavAnimate("5","sectionFive");
      this.sideNavMobile('section5_mobile');
      document.getElementById("sideNavContain").style.transform = "translate(0%)";
    }
  }

}
