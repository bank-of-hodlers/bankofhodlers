import { Component, OnInit,} from '@angular/core';
import { concat } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { StatuscheckerService } from '../statuschecker.service';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.css']
})
export class MarketsComponent implements OnInit {

  constructor( public titleService : Title, public statusCheck :StatuscheckerService,  ) { }

  toggleCol1 = 0;
  toggleCol2 = 0;
  toggleCol3 = 0;
  toggleCol4 = 0;
  toggleCol5 = 0;
  toggleCol6 = 0;
  toggleCol7 = 0;
  toggleCol8 = 0;
  filterArray = []
  mainFilterArray = ["ALL","FAV","ETH","BTC","LTC","DASH"]
  currencyArray = [{"name":"USD","icon":"$"},{"name":"INR","icon":"₹"},{"name":"EUR","icon":"€"}]
  convertArray ={
    "USD":
        {
          "USD":1,
          "INR":.013,
          "EUR":1.12
        },
    "INR":
        {
          "USD":75.50,
          "INR":1,
          "EUR":84.71
        },
    "EUR":
        {
          "USD":.89,
          "INR":.012,
          "EUR":1
        }
  };

  dropDownItem = "USD"
  
  isLoggedIn : boolean = true;
  fetchData = [
    {
      "id":"1",
      "cur":"INR",
      "coin":"ETH",
      "l_price":"4.91",
      "amount":"₹132",
      "daliy_change":"3271.68",
      "daliy_change_per":"-0.44%",
      "daliy_high":"58,538.00",
      "daliy_low":"7,65,238.00",
      "daliy_vol":"2,42,01,340.36",
      "isLiked":"true"
    },
    {
      "id":"2",
      "cur":"INR",
      "coin":"BTC",
      "l_price":"334.91",
      "amount":"₹12",
      "daliy_change":"3271.68",
      "daliy_change_per":"0.44%",
      "daliy_high":"3,38,538.00",
      "daliy_low":"5,15,268.00",
      "daliy_vol":"1,42,11,340.36",
      "isLiked":"false"
    },
    {
      "id":"3",
      "cur":"INR",
      "coin":"LTC",
      "l_price":"3,340.91",
      "amount":"₹302",
      "daliy_change":"3271.68",
      "daliy_change_per":"-0.44%",
      "daliy_high":"3,08,538.00",
      "daliy_low":"1,26,298.00",
      "daliy_vol":"2,02,51,340.36",
      "isLiked":"false"
    },
    {
      "id":"4",
      "cur":"INR",
      "coin":"DASH",
      "l_price":"271.68",
      "amount":"₹52",
      "daliy_change":"336.55",
      "daliy_change_per":"1.64%",
      "daliy_high":"3,18,538.00",
      "daliy_low":"9,25,238.00",
      "daliy_vol":"10,62,31,340.36",
      "isLiked":"true"
    },
    {
      "id":"5",
      "cur":"USD",
      "coin":"ETH",
      "l_price":"2701.68",
      "amount":"$663",
      "daliy_change":"6256.55",
      "daliy_change_per":"-1.64%",
      "daliy_high":"8,538.00",
      "daliy_low":"25,238.00",
      "daliy_vol":"5,42,91,340.36",
      "isLiked":"false"
    },
    {
      "id":"6",
      "cur":"USD",
      "coin":"ETH",
      "l_price":"2701.68",
      "amount":"$663",
      "daliy_change":"6256.55",
      "daliy_change_per":"1.64%",
      "daliy_high":"6,58,538.00",
      "daliy_low":"4,25,838.00",
      "daliy_vol":"2,42,340.36",
      "isLiked":"false"
    },
    {
      "id":"7",
      "cur":"EUR",
      "coin":"BTC",
      "l_price":"2701.68",
      "amount":"€663",
      "daliy_change":"6256.55",
      "daliy_change_per":"1.64%",
      "daliy_high":"7,58,538.00",
      "daliy_low":"7,25,238.00",
      "daliy_vol":"2,42,01,340.36",
      "isLiked":"true"
    },
    {
      "id":"8",
      "cur":"EUR",
      "coin":"LTC",
      "l_price":"2701.68",
      "amount":"€93",
      "daliy_change":"256.55",
      "daliy_change_per":"-0.64%",
      "daliy_high":"2,58,538.00",
      "daliy_low":"29,248.00",
      "daliy_vol":"2,42,71,340.36",
      "isLiked":"true"
    },
]

displayData = []

  ngOnInit() {
    this.titleService.setTitle('Markets - Bank of Hodlers');
    this.statusCheck.onRefreashUrlChecker();
    this.displayData = this.attrChecker(this.fetchData);
    // for(let element of this.filterArray){
    //   this.mainFilterArray.push(element.toString());
    // }
    window.onload = (event) => {
      this.convert(this.currencyArray[0])
    };
  }


  isEmpty(array){
    if(array.length == 0){
      return true
    }
    else{
      return false
    }
  }

  clearFilter(){
    for (let entry of this.mainFilterArray) {
      document.getElementById(entry).classList.remove("select");
    }
    document.getElementById("ALL").className += " select";
  }

  filterSelector(filter : string){
    for (let entry of this.mainFilterArray) {
      document.getElementById(entry).classList.remove("select");
    }
    (<HTMLInputElement>document.getElementById("searchToken")).value = ""
    document.getElementById(filter).className += " select";
    var filterData = [];

    if(filter == "ALL"){
      this.displayData = [];
      this.displayData = this.attrChecker(this.fetchData)
    }
    else if(filter == "FAV"){
      for (let i of this.fetchData){
        if(i.isLiked == "true" && this.isLoggedIn){
          filterData.push(i)
        }
      }
      this.displayData = [];
      this.displayData = this.attrChecker(filterData)
    }
    else{
      for (let i of this.fetchData){
        if(i.coin == filter){
          filterData.push(i)
        }
      }
      this.displayData = [];
      this.displayData = this.attrChecker(filterData)
    }
  }

  doLike(id){
    if(this.isLoggedIn){
      // Do the like action here
      console.log("Like the id: "+id)
    }
    else{
      // prompt login - temporary code here
      alert("Oh you not logged in. Please login to like")
    }
  }

  unDoLike(id){
    if(this.isLoggedIn){
      // Do the unlike action here
      console.log("Unlike the id: "+id)
    }
    else{
      // prompt login - temporary code here
      alert("Oh you not logged in. Please login to unlike")
    }
  }

  isNegative(num){
    var temp = num.split("%");
    var numInt = parseFloat(temp[0]);
    if(numInt >= 0){
      return false;
    } 
    else if(numInt < 0){
      return true;
    }
  }

  attrChecker(attrData){
    var temp = []
    for (let item of attrData){
      if(this.isNegative(item.daliy_change_per)){
        item['attr'] = true;
      }
      else{
        item['attr'] = false;
      }
      temp.push(item)
    }

    return temp;
  }

  GetSortOrderNumber(prop, order) {    
    return function(a, b) {   
      var val1 = parseFloat(a[prop].replace(/[^\d\.\-\ ]/g,''));
      var val2 = parseFloat(b[prop].replace(/[^\d\.\-\ ]/g,''));
      // console.log(val1 +"  "+ val2)
      switch(order){
        case 'asc':
            if (val1 > val2) {   
                return 1;    
            } else if (val1 < val2) {    
                return -1;    
            }    
            break; 
        case "desc":
            if (val1 > val2) {   
                return -1;    
            } else if (val1 < val2) {    
                return 1;    
            }    
            break; 
        default:
          break;
      }   
    }    
  } 

  sorterCol1(coloms){
    if(this.toggleCol1==0){
      (<HTMLInputElement>document.getElementById(coloms+"_up")).src = "assets/images/sortup_fill.png";
      (<HTMLInputElement>document.getElementById(coloms+"_down")).src = "assets/images/sortup.png";
      this.toggleCol1 = 1;
      this.displayData.sort((a,b) => ( a.coin > b.coin ) ? 1: -1)
    }
    else if(this.toggleCol1==1){
      (<HTMLInputElement>document.getElementById(coloms+"_up")).src = "assets/images/sortup.png";
      (<HTMLInputElement>document.getElementById(coloms+"_down")).src = "assets/images/sortup_fill.png";
      this.toggleCol1 = 0;
      this.displayData.sort((a,b) => ( a.coin > b.coin ) ? -1: 1)
    }
  }

  sorterCol2(coloms){
    if(this.toggleCol2==0){
      (<HTMLInputElement>document.getElementById(coloms+"_up")).src = "assets/images/sortup_fill.png";
      (<HTMLInputElement>document.getElementById(coloms+"_down")).src = "assets/images/sortup.png";
      this.toggleCol2 = 1;
      this.displayData.sort((a,b) => ( a.coin > b.coin ) ? 1: -1)
    }
    else if(this.toggleCol2==1){
      (<HTMLInputElement>document.getElementById(coloms+"_up")).src = "assets/images/sortup.png";
      (<HTMLInputElement>document.getElementById(coloms+"_down")).src = "assets/images/sortup_fill.png";
      this.toggleCol2 = 0;
      this.displayData.sort((a,b) => ( a.coin > b.coin ) ? -1: 1)
    }
  }

  sorterCol3(coloms){
    if(this.toggleCol3==0){
      (<HTMLInputElement>document.getElementById(coloms+"_up")).src = "assets/images/sortup_fill.png";
      (<HTMLInputElement>document.getElementById(coloms+"_down")).src = "assets/images/sortup.png";
      this.toggleCol3 = 1;
      this.displayData.sort(this.GetSortOrderNumber('l_price','asc'))
    }
    else if(this.toggleCol3==1){
      (<HTMLInputElement>document.getElementById(coloms+"_up")).src = "assets/images/sortup.png";
      (<HTMLInputElement>document.getElementById(coloms+"_down")).src = "assets/images/sortup_fill.png";
      this.toggleCol3 = 0;
      this.displayData.sort(this.GetSortOrderNumber('l_price','desc'))
    }
  }

  sorterCol4(coloms){
    if(this.toggleCol4==0){
      (<HTMLInputElement>document.getElementById(coloms+"_up")).src = "assets/images/sortup_fill.png";
      (<HTMLInputElement>document.getElementById(coloms+"_down")).src = "assets/images/sortup.png";
      this.toggleCol4 = 1;
      this.displayData.sort(this.GetSortOrderNumber('daliy_change','asc'))
    }
    else if(this.toggleCol4==1){
      (<HTMLInputElement>document.getElementById(coloms+"_up")).src = "assets/images/sortup.png";
      (<HTMLInputElement>document.getElementById(coloms+"_down")).src = "assets/images/sortup_fill.png";
      this.toggleCol4 = 0;
      this.displayData.sort(this.GetSortOrderNumber('daliy_change','desc'))
    }
  }

  sorterCol5(coloms){
    if(this.toggleCol5==0){
      (<HTMLInputElement>document.getElementById(coloms+"_up")).src = "assets/images/sortup_fill.png";
      (<HTMLInputElement>document.getElementById(coloms+"_down")).src = "assets/images/sortup.png";
      this.toggleCol5 = 1;
      this.displayData.sort(this.GetSortOrderNumber('daliy_change_per','asc'))
    }
    else if(this.toggleCol5==1){
      (<HTMLInputElement>document.getElementById(coloms+"_up")).src = "assets/images/sortup.png";
      (<HTMLInputElement>document.getElementById(coloms+"_down")).src = "assets/images/sortup_fill.png";
      this.toggleCol5 = 0;
      this.displayData.sort(this.GetSortOrderNumber('daliy_change_per','desc'))
    }
  }

  sorterCol6(coloms){
    if(this.toggleCol6==0){
      (<HTMLInputElement>document.getElementById(coloms+"_up")).src = "assets/images/sortup_fill.png";
      (<HTMLInputElement>document.getElementById(coloms+"_down")).src = "assets/images/sortup.png";
      this.toggleCol6 = 1;
      this.displayData.sort(this.GetSortOrderNumber('daliy_high','asc'))
    }
    else if(this.toggleCol6==1){
      (<HTMLInputElement>document.getElementById(coloms+"_up")).src = "assets/images/sortup.png";
      (<HTMLInputElement>document.getElementById(coloms+"_down")).src = "assets/images/sortup_fill.png";
      this.toggleCol6 = 0;
      this.displayData.sort(this.GetSortOrderNumber('daliy_high','desc'))
    }
  }

  sorterCol7(coloms){
    if(this.toggleCol7==0){
      (<HTMLInputElement>document.getElementById(coloms+"_up")).src = "assets/images/sortup_fill.png";
      (<HTMLInputElement>document.getElementById(coloms+"_down")).src = "assets/images/sortup.png";
      this.toggleCol7 = 1;
      this.displayData.sort(this.GetSortOrderNumber('daliy_low','asc'))
    }
    else if(this.toggleCol7==1){
      (<HTMLInputElement>document.getElementById(coloms+"_up")).src = "assets/images/sortup.png";
      (<HTMLInputElement>document.getElementById(coloms+"_down")).src = "assets/images/sortup_fill.png";
      this.toggleCol7 = 0;
      this.displayData.sort(this.GetSortOrderNumber('daliy_low','desc'))
    }
  }

  sorterCol8(coloms){

    if(this.toggleCol8==0){
      (<HTMLInputElement>document.getElementById(coloms+"_up")).src = "assets/images/sortup_fill.png";
      (<HTMLInputElement>document.getElementById(coloms+"_down")).src = "assets/images/sortup.png";
      this.toggleCol8 = 1;
      this.displayData.sort(this.GetSortOrderNumber('daliy_vol','asc'))
    }
    else if(this.toggleCol8==1){
      (<HTMLInputElement>document.getElementById(coloms+"_up")).src = "assets/images/sortup.png";
      (<HTMLInputElement>document.getElementById(coloms+"_down")).src = "assets/images/sortup_fill.png";
      this.toggleCol8 = 0;
      this.displayData.sort(this.GetSortOrderNumber('daliy_vol','desc'))
    }
  }

  searcher(){
    var searchToken = (<HTMLInputElement>document.getElementById("searchToken")).value;
    var filterData = [];
    if(searchToken.length != 0){
      for (let i of this.displayData){
        if(i.coin.toLowerCase().includes(searchToken.toLowerCase()) || i.cur.toLowerCase().includes(searchToken.toLowerCase())){
          filterData.push(i)
        }
      }
      this.displayData = [];
      this.displayData = this.attrChecker(filterData)
    }
    else{
      this.displayData = [];
      this.displayData = this.attrChecker(this.fetchData)
      this.clearFilter()
    }
  }

  convert(cur){
    this.dropDownItem = cur.name
    var conversionData = [];
    this.clearFilter();
    (<HTMLInputElement>document.getElementById("searchToken")).value = ""
    for (var j = 0; j<this.fetchData.length ; j++){
      var i = [];
      i['l_price'] = this.fetchData[j].l_price;
      i['daliy_change'] = this.fetchData[j].daliy_change;
      i['daliy_high'] = this.fetchData[j].daliy_high;
      i['daliy_low'] = this.fetchData[j].daliy_low;
      i['cur'] = this.fetchData[j].cur;
      i["id"] = this.fetchData[j].id
      i["coin"] = this.fetchData[j].coin
      i["daliy_change_per"] = this.fetchData[j].daliy_change_per
      i["isLiked"] = this.fetchData[j].isLiked
      i['daliy_vol'] = this.fetchData[j].daliy_vol;
      i['cur'] = this.fetchData[j].cur;
      if(this.fetchData[j].cur == cur.name){
        i['amount'] = this.fetchData[j].amount;
      }
      else{
        i['amount'] = cur.icon +parseFloat(this.convertCurrency(this.fetchData[j].cur, cur.name, this.fetchData[j].amount)).toLocaleString('en-IN')
      }
      conversionData.push(i);
    }
    
    this.displayData = [];
    this.displayData = this.attrChecker(conversionData)
  }
  convertCurrency(fromCurrency, toCurrency, amount) {
    var temp = [];
    temp.push("from :"+fromCurrency)
    temp.push("to :"+toCurrency)
    temp.push("amount :"+amount)
    var cCur = this.convertArray[toCurrency][fromCurrency];
    return (parseFloat(amount.replace(/[^\d\.\-\ ]/g,'')) * cCur).toFixed(2);
  }

}

