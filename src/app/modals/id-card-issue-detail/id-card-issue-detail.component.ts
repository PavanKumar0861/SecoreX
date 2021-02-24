import {Component, Inject,OnInit, HostListener} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { IdCardIssueComponent } from 'src/app/components/id-card-issue/id-card-issue.component';


@Component({
  selector: 'app-id-card-issue-detail',
  templateUrl: './id-card-issue-detail.component.html',
  styleUrls: ['./id-card-issue-detail.component.css']
})
export class IdCardIssueDetailComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<IdCardIssueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit(): void {
    }
  
    

  onNoClick(): void {
    this.dialogRef.close();
  }
}
