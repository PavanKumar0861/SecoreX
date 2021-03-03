import { Component, OnInit, Inject } from '@angular/core';
import { PrintPipelineComponent } from 'src/app/components/printing-queue/print-pipeline/print-pipeline.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-reject-reason',
  templateUrl: './reject-reason.component.html',
  styleUrls: ['./reject-reason.component.css']
})
export class RejectReasonComponent implements OnInit {
  txtRemarksAdmin:'';
  constructor(
    public dialogRef: MatDialogRef<PrintPipelineComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit(): void {
      //console.log(this.data)
    }
  
    

  onNoClick(): void {
    this.dialogRef.close();
  }

}
