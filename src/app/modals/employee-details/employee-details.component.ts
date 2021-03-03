import { Component, OnInit, Inject } from '@angular/core';
import { IdCardApprovalComponent } from 'src/app/components/id-card-approval/id-card-approval.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<IdCardApprovalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  employee: any = {
    emp_no: 9077663,
    name: "Jankai Ram",
    mail_id:"janakiram@gmail.com",
    department:"-",
    base_location:"Bangalore",
    current_loation:"Bangalore",
    Extension:"-",
    preffered_display_name:"Jankai Ram",

    card_effective_from:"1/1/2020 12:00:00 AM",
    status:"Submit",
    reason_for_apply:"Damaged",

    request_no:52,
    request_date:"1/1/2020 12:00:00 AM",
    reason_for_applying:"Damaged",
    user_marks:"Photograph uploaded",
    desk_name:"Bangalore",
    phone_number:"9876543567",

    request_date2:"1/1/2020 12:00:00 AM",
    Last_acted_by:"-",
    consent_responed_on:"",
    consent_availability:"",
    approved_on:"1/1/2020 12:00:00 AM",
    approved_by:"",
    card_printed_on:"",
    card_printed_by:"",
    certificate_request_no:"srtaejlalaabrianmeoslha",
    certificate_request_status:"-",
    certificate_request_raised_on:"1/1/2020 12:00:00 AM",
    certificate_completed_on:"1/1/2020 12:00:00 AM",
    card_dispatch_on:"1/1/2020 12:00:00 AM",
    card_dispatched_by:"-",
    received_on:"1/1/2020 12:00:00 AM",
    received_by:"-",
    mail_sent_on:"1/1/2020 12:00:00 AM",
    mail_sent_by:"-",
    issued_on:"1/1/2020 12:00:00 AM",
    issued_by:"-",
    photo_moved_eds:"-"
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
