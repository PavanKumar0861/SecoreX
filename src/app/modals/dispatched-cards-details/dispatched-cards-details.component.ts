import { Component, Inject, OnInit, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IdCardIssueComponent } from 'src/app/components/id-card-issue/id-card-issue.component';


@Component({
  selector: 'app-dispatched-cards-details',
  templateUrl: './dispatched-cards-details.component.html',
  styleUrls: ['./dispatched-cards-details.component.css']
})
export class DispatchedCardsDetailsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<IdCardIssueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }



  onNoClick(): void {
    this.dialogRef.close();
  }

}
