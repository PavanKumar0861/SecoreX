import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";
import {ChartService} from "../../services/charts.service";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  // public lineChartData: ChartDataSets[] = [
  //   { data: [2, 21, 2, 20, 61, 26, 55, 7], label: "Residece" },
  //   { data: [1, 29, 20, 41, 16, 36, 1], label: "Office" }
  // ];
  // public lineChartLabels: Label[] = [
  //   "1",
  //   "2",
  //   "3",
  //   "4",
  //   "5",
  //   "6",
  //   "7",
  //   "8"
  // ];
  // public lineChartOptions: any  = {
  //   responsive: true
  // };
  // public lineChartColors: Color[] = [
  //   {
  //     borderColor: "rgba(77,223,222,0.9)",
  //     backgroundColor: "rgba(77,223,222,0.8)",
  //     borderWidth: 0,
  //     pointRadius:0,
  //   },
  //   {
  //     // borderColor: "rgba(133,170,247)",
  //     backgroundColor: "rgba(133,170,247,0.8)",
  //     borderWidth: 0,
  //     pointRadius:0
  //   }
  // ];
  // public lineChartLegend = true;
  // public lineChartType = "line";
  // public lineChartPlugins = [ {
  //       display: false,
  //   }];
    

  constructor(private chartservice:ChartService) {}

  products: any;
  empno;

  // ADD CHART OPTIONS. 
  pieChartOptions = {
    responsive: true
}

pieChartLabels =  [];
pieChartData:any =[
  { 
    data: []
}
];
// CHART COLOR.
pieChartColor:any = [
    {
        backgroundColor: ['rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        'rgba(255, 161, 181, 0.9)',
        'rgba(255, 102, 0, 0.9)'
        ]
    }
]

// pieChartData:any = [
// ];

  ngOnInit() {
    this.ReadLineChart()
  }

  ReadLineChart(): void {
    const data = {
      empno: sessionStorage.getItem('empno'),
      name: "GetTopEmployeeAccess"
    };
    
    this.chartservice.LineChart(data)
      .subscribe(
        products => {
          //console.log(products);
         this.pieChartLabels = products.map(x=>x.empNo);
         for(let i=0;i<products.length;i++)
          {
            this.pieChartData[i].data=products.map(x=>x.occurances);
            console.log(this.pieChartData[i].data);
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