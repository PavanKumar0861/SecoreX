import { Component, OnInit, Inject } from '@angular/core';
import { IdCardApprovalComponent } from 'src/app/components/id-card-approval/id-card-approval.component';
import { DomSanitizer } from '@angular/platform-browser';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { image } from 'src/app/components/defaultImage';

@Component({
  selector: 'app-employee-photo',
  templateUrl: './employee-photo.component.html',
  styleUrls: ['./employee-photo.component.css']
})
export class EmployeePhotoComponent implements OnInit {
da:'';
imageSource
  constructor( public dialogRef: MatDialogRef<EmployeePhotoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    
    console.log(this.data.data);
    if(this.data.data!=null)
    {
      this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${this.data.data.imgEmpPhoto}`);
    }
    else
    {
      this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${image}`);
    }
   
    // if(this.imageSource)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
