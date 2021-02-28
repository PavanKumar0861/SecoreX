import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [2, 21, 2, 20, 61, 26, 55, 7], label: "Residece" },
    { data: [1, 29, 20, 41, 16, 36, 1], label: "Office" }
  ];
  public lineChartLabels: Label[] = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8"
  ];
  public lineChartOptions: any  = {
    responsive: true
  };
  public lineChartColors: Color[] = [
    {
      borderColor: "rgba(77,223,222,0.9)",
      backgroundColor: "rgba(77,223,222,0.8)",
      borderWidth: 0,
      pointRadius:0,
    },
    {
      // borderColor: "rgba(133,170,247)",
      backgroundColor: "rgba(133,170,247,0.8)",
      borderWidth: 0,
      pointRadius:0
    }
  ];
  public lineChartLegend = true;
  public lineChartType = "line";
  public lineChartPlugins = [ {
        display: false,
    }];
    

  constructor() {}

  ngOnInit() {}
}