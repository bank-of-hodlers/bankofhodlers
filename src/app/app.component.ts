import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'boh';

  overEvent(e){
    if(e.clientX >= document.documentElement.offsetWidth ){
      if(document.documentElement.offsetWidth <= 991){
        document.getElementById("mobile_side").style.transform = "translate(0%)"
      }
    }
  }
  clickEvent(e){
    if(e.clientX < document.documentElement.offsetWidth ){
      document.getElementById("mobile_side").style.transform = "translate(100%)"
    }
  }

  @HostListener('window:mousedown', ['$event'])
  handleKeyDown(event: MouseEvent) {
    // console.log(event.clientX)
    if(event.clientX >= (document.documentElement.offsetWidth - 25)){
      if(document.documentElement.offsetWidth <= 991){
        document.getElementById("mobile_side").style.transform = "translate(0%)"
      }
    }
  }
}
