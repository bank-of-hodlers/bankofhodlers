import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutText } from "./about";
import { ApiText } from "./api";
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
// import { ScrollToModule } from 'ng2-scroll-to-el';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { MarketsComponent } from './markets/markets.component';
import { FeeComponent } from './fee/fee.component';
import { FeeText } from './fees';
import { FaqsText } from './faqstext';
import { HomeText } from './hometext';
import { InViewportModule } from 'ng-in-viewport';
import { FaqsComponent } from './faqs/faqs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    EnterpriseComponent,
    MarketsComponent,
    FeeComponent,
    FaqsComponent,
    HomeComponent,
    ErrorpageComponent,
    TermsComponent,
    PrivacyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
    InViewportModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AboutText,
    ApiText,
    FeeText,
    FaqsText,
    HomeText,
    Title,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
