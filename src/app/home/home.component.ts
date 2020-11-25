import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  searchItem: any;
  list = [];
  tempList = [];
  tempList1 = [];
  finalList = [];
  loading: boolean = false;
  years = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
  selectedYear: any;
  selectedSuccessfulLaunch: boolean;
  selectedSuccessfulLanding: boolean;

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service._getWithoutFilters().subscribe(result => {
      this.list = result;
      this.finalList = result;
      this.tempList = result;
      this.loading = true;
    });
  }

  changeYear(item: any) {
    this.selectedYear = item;
    this.finalList = [];
    this.tempList = this.tempList.filter(i => i.launch_year === item);
    this.finalList = this.tempList;
  }

  changeSuccessfulLaunch(item: any) {
    this.finalList = [];
    this.selectedSuccessfulLaunch = item;
    this.tempList = this.tempList.filter(i => i.launch_success === item);
    this.finalList = this.tempList;
  }

  changeSuccessfulLanding(item: any) {
    this.finalList = [];
    this.selectedSuccessfulLanding = item;
    this.tempList = this.tempList.filter(i => i.rocket?.first_stage?.cores[0].land_success === item);
    this.finalList = this.tempList;
  }

  reset() {
      this.selectedYear = undefined;
      this.selectedSuccessfulLaunch = undefined;
      this.selectedSuccessfulLanding = undefined;
      this.finalList = this.list;
  }
}
