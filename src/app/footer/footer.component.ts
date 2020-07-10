import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onIntersection1({ target, visible }: { target: Element; visible: boolean }): void {
    if(visible){
      document.getElementById("sideNavContain").style.transform = "translate(-130%)";
    }else{
      if(window.scrollY > 1000){
        document.getElementById("sideNavContain").style.transform = "translate(0%)";
      }
    }
  }

}
