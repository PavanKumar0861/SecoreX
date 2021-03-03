import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IdCardIssueComponent } from 'src/app/components/id-card-issue/id-card-issue.component';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.css']
})
export class CardPreviewComponent implements OnInit {

  constructor(  public dialogRef: MatDialogRef<IdCardIssueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
