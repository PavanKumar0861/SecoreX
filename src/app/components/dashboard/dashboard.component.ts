import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  CardDispatched =0;
  CardIssue =0; 
  CardRequest =0; 
  userDisplayName;
  constructor(private DashboardService: DashboardService) { }

  ngOnInit(): void {
    this.ReadNoOfCardsApproved()
    this.ReadNoOfCardsIssued()
    this.ReadNoOfCardsDispatched()
    this.userDisplayName = sessionStorage.getItem('loggedUser');
  }

  ReadNoOfCardsApproved(): void {
    let name = "NoOfCardsApproved";
    this.DashboardService.NoOfCardsApproved(name)
      .subscribe(
        products => {
          console.log(products);
          // alert(products);
          this.CardRequest=products;
        },
        error => {
          console.log(error);
        });
      
      }

      ReadNoOfCardsDispatched(): void {
        let name = "NoOfCardsDispatched";
        this.DashboardService.NoOfCardsDispatched(name)
          .subscribe(
            products => {
              console.log(products);
              // alert(products);
              this.CardDispatched=products;
            },
            error => {
              console.log(error);
            });
          
          }

          ReadNoOfCardsIssued(): void {
            let name = "NoOfCardsIssued";
            this.DashboardService.NoOfCardsIssued(name)
              .subscribe(
                products => {
                  console.log(products);
                  // alert(products);
                  this.CardIssue=products;
                },
                error => {
                  console.log(error);
                });
              
              }


}
