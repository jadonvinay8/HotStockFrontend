import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import 'bootstrap/dist/js/bootstrap.bundle';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {RouterModule} from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'analysis', component: AnalysisComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnalysisComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
