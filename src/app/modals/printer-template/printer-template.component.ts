import { Component, OnInit, Inject } from '@angular/core';
import { PrintPipelineComponent } from 'src/app/components/printing-queue/print-pipeline/print-pipeline.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-printer-template',
  templateUrl: './printer-template.component.html',
  styleUrls: ['./printer-template.component.css']
})
export class PrinterTemplateComponent implements OnInit {



  constructor(
    public dialogRef: MatDialogRef<PrintPipelineComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit(): void {
    }
  
    

  onNoClick(): void {
    this.dialogRef.close();
  }

}
