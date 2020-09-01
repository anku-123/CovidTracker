import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../_services/_common-service.service';
import { Router } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeIn from '@angular/common/locales/en-IN';
registerLocaleData(localeIn);


@Component({
  selector: 'app-state-view',
  templateUrl: './state-view.component.html',
  styleUrls: ['./state-view.component.css']
})
export class StateViewComponent implements OnInit {

  cardData: any = {};
  tableData = [];
  listStatus = false;

  displayedColumns: string[] = ['state', 'confirmed', 'recovered', 'deaths'];
  dataSource: any;
  districtData: any;

  constructor(private common: CommonServiceService, private router: Router) { }

  ngOnInit() {


    this.getCardData();

    this.getTableData();

    this.common.disbsharedItem.subscribe(item => this.districtData = item);

  }

  getCardData() {

    this.common.getData("https://api.covidindiatracker.com/total.json").subscribe((res: any) => {
      this.cardData = res;
      console.log(this.cardData);
    });

  }

  getTableData() {

    this.common.getData("https://api.covidindiatracker.com/state_data.json").subscribe((res: any) => {
      this.tableData = res;
      console.log(this.tableData);
      this.dataSource = this.tableData;
    });

  }



  showDistrict(row) {
    console.log(row);
    this.common.nextDisbItem(row);
    this.router.navigate(['/district']);
  }
}
