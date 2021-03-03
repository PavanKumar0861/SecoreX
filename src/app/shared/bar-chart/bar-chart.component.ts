import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import {ChartService} from "../../services/charts.service";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['New Card', 'Damage Card'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  
  public barChartData: ChartDataSets[] = [
    { data: [], label: '' },
    //{ data: [9], label: 'Series B' }
  ];

  constructor(private chartservice:ChartService) { }

  ngOnInit() {
    this.ReadBarChart();
  }

  ReadBarChart(): void {
    const data = {
      empno: sessionStorage.getItem('empno'),
      name: "GetProfileCount"
    };
    
    this.chartservice.barChart(data)
      .subscribe(
        products => {
          console.log(products);
          // alert(products);
         this.barChartLabels = products.map(x=>x.profileName);
         for(let i=0;i<products.length;i++)
          {
            this.barChartData[i].data=products.map(x=>x.occurance);
            console.log(this.barChartData[i].data);
          }
          // alert(this.pieChartData);
           //alert(this.pieChartLabels);
          //this.CardRequest=products;
        },
        error => {
          console.log(error);
        });
      
      }
}
