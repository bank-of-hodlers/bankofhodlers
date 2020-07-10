import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent implements OnInit {

  constructor( public titleService : Title ) { }

  ngOnInit() {
    this.titleService.setTitle('404 Error Page - Bank of Hodlers');
  }

}
