import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../../_services/_common-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-district-view',
  templateUrl: './district-view.component.html',
  styleUrls: ['./district-view.component.css']
})
export class DistrictViewComponent implements OnInit {
  districtData: any;


  displayedColumns: string[] = ['name', 'confirmed', 'recovered', 'deaths'];
  dataSource: any;

  tableData = [];
  cardData: any = {};

  constructor(private common: CommonServiceService, private router: Router) { }

  ngOnInit() {


    this.common.distsharedItem.subscribe(item => this.districtData = item);
    this.cardData.confirmed = this.districtData.confirmed;
    this.cardData.recovered = this.districtData.recovered;
    this.cardData.deaths = this.districtData.deaths;
    this.tableData = this.districtData.districtData;
    this.dataSource = this.tableData;
    if (!this.tableData) {
      this.router.navigate(['/']);
    }
  }

}


