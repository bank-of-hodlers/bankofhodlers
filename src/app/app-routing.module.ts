import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { MarketsComponent } from './markets/markets.component';
import { FeeComponent } from './fee/fee.component';
import { FaqsComponent } from './faqs/faqs.component';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'enterprise', component: EnterpriseComponent },
  { path: 'faq', component: FaqsComponent },
  { path: 'telegram', component: AboutComponent },
  { path: 'market', component: MarketsComponent },
  { path: 'fee', component: FeeComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: '**', component: ErrorpageComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
