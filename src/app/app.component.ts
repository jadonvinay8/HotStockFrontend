import { Component } from '@angular/core';
import {StockDataService} from './services/stock-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  request = {
    ticker: '',
    period: '',
    showActions: false
  };

  stockData;
  keys = [];
  dates = [];
  constructor(private service: StockDataService) {}

  getStockData() {
    this.service.getStockData(this.request).subscribe(
      data => {
        // added below 2 lines to avoid  the  display of cache results
        this.stockData = {};
        this.keys = [];

        data = JSON.parse(JSON.stringify(data));

        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            this.stockData[key] = data[key];
          }
        }
        this.keys = Object.keys(this.stockData);
        this.dates = this.stockData[this.keys[0]];
        this.keys = this.keys.filter(key => key !== 'Dates');
      },
      err => console.log('An error occurred: ' + err)
    );
  }

}
