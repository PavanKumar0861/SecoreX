import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ElementRef, ViewChild, VERSION } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import {PageEvent,MatPaginator} from '@angular/material/paginator';
import { RejectReasonComponent } from 'src/app/modals/reject-reason/reject-reason.component';
import { MatDialog } from '@angular/material/dialog';
import {CommonService} from '../../services/common.service';
import {IdCardService} from '../../services/IdCard.service';
import { FormBuilder,AbstractControl } from '@angular/forms';
import { EmployeePhotoComponent } from 'src/app/modals/employee-photo/employee-photo.component';
import { EmployeeDetailsComponent } from 'src/app/modals/employee-details/employee-details.component';


export interface PeriodicElement {
  empno: string;
  company: number;
  rtype: number;
  location: string;
  status: string;
}

const ELEMENT_DATA: any[] = [
  // { empNo: 480331, company: 'INFSYS', requestType: 'Damaged Card', location: 'Bangalore', status: 'Approved', action: 'edit', idCardView: 'no' },
  // { empNo: 480331, company: 'INFSYS', requestType: 'Damaged Card', location: 'Bangalore', status: 'Approved', action: 'edit', idCardView: 'no' },
  // { empNo: 480331, company: 'INFSYS', requestType: 'Damaged Card', location: 'Bangalore', status: 'Approved', action: 'edit', idCardView: 'no' },
  // { empNo: 480331, company: 'INFSYS', requestType: 'Damaged Card', location: 'Bangalore', status: 'Approved', action: 'edit', idCardView: 'no' },
  // { empNo: 480331, company: 'INFSYS', requestType: 'Damaged Card', location: 'Bangalore', status: 'Approved', action: 'edit', idCardView: 'no' },
];


@Component({
  selector: 'app-id-card-approval',
  templateUrl: './id-card-approval.component.html',
  styleUrls: ['./id-card-approval.component.css']
})
export class IdCardApprovalComponent implements OnInit {
  mobileQuery: MediaQueryList;
  opened: boolean = true;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  company: any[];
  image: any[];
location: any[];
txtRemarksAdmin:'';
employeeNo: any;
searchfilter = {
  txtReqStatus:'',
  txtEmpNo:'',
  txtCompany:'',
  txtReasonForApply:'',
  txtCurrentLocationApplied:'',
  txtCardNo:'',
  txtCourierTrackingNo:'',
  intReqNo:'',
  flgPreferredAddress:''
}
offset:any;
@ViewChild(MatPaginator) paginator: MatPaginator;
readonly formControl: AbstractControl;
selectedRow = new Array<any>();



  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private navService: NavService,public dialog: MatDialog,private IdCardService: IdCardService,private commonsercive:CommonService,formBuilder: FormBuilder) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.dataSource.filterPredicate = ((data, filter) => {
      //alert(filter.position)
      const a = !filter.empno || data.txtEmpNo == filter.empno;
      const b = !filter.company || data.txtCompany.toLowerCase() ==filter.company;
      // const b = !filter.name || data.txtCompany.toLowerCase().includes(filter.name);
      const c = !filter.rtype || data.txtReasonForApply.toLowerCase() == filter.rtype;
      const d = !filter.location || data.txtCurrentLocationApplied.toLowerCase() == filter.location;
      const f = !filter.status || data.txtReqStatus.toLowerCase() == filter.status;
      //alert(a)
      return a && b && c && d && f;
    }) as (PeriodicElement, string) => boolean;

    this.formControl = formBuilder.group({
      empno: '',
  company: '',
  rtype: '',
  location: '',
  status: '',
    })
    this.formControl.valueChanges.subscribe(value => {
      const filter = {...value} as string;
      this.dataSource.filter = filter;
    });

  }

  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  ngOnInit(): void {
    this.readProducts();
    this.readCompany();
    this.readLocation();
  }

  readCompany(): void {
    const data = {
      name: 'GetCompanies',
    };
    this.commonsercive.readallCompany(data)
      .subscribe(
        Response => {
          //this.IdCardService = products;
          this.company = Response;
          
        },
        error => {
          console.log(error);
        });
      
      }

      readLocation(): void {
        const data = {
          name: 'GetLocations',
        };
        this.commonsercive.readallLocation(data)
          .subscribe(
            Response => {
              //this.IdCardService = products;
              this.location = Response;
            },
            error => {
              console.log(error);
            });
          
          }


  readProducts(): void {
    const data = {
      name: 'S',
    };
    this.IdCardService.readAll(data)
      .subscribe(
        products => {
          
          for(let i=0;i<products.length;i++)
          {
            if(products[i].txtReqStatus=='S')
            {
              products[i].txtReqStatus='Submitted';
            }
            if(products[i].txtReasonForApply=='F')
            {
              products[i].txtReasonForApply='Damage';
            }
            else if(products[i].txtReasonForApply=='L')
            {
              products[i].txtReasonForApply='Lost';
            }
            else
            {
              products[i].txtReasonForApply='New';
            }
            
          }

          this.dataSource.data=products;  
          this.dataSource.paginator=this.paginator;       
          console.log(this.dataSource);
        },
        error => {
          console.log(error);
        });
      
      }

      search():void{
        const data = {
          txtReqStatus: 'S',
          txtEmpNo: this.searchfilter.txtEmpNo,
          txtCompany:this.searchfilter.txtCompany,
          txtReasonForApply:this.searchfilter.txtReasonForApply,
          txtCurrentLocationApplied:this.searchfilter.txtCurrentLocationApplied,
        };
        this.IdCardService.search(data)
        .subscribe(
          products => {
            for(let i=0;i<products.length;i++)
          {
            if(products[i].txtReqStatus=='S')
            {
              products[i].txtReqStatus='Submitted';
            }
            if(products[i].txtReasonForApply=='F')
            {
              products[i].txtReasonForApply='Damage';
            }
            else if(products[i].txtReasonForApply=='L')
            {
              products[i].txtReasonForApply='Lost';
            }
            else
            {
              products[i].txtReasonForApply='New';
            }
            
          }
            this.dataSource.data=products;       

          },
          error => {
            console.log(error);
          });
      }

      handleClear():void{
        this.searchfilter.txtCompany='';
        this.searchfilter.txtCurrentLocationApplied='';
        this.searchfilter.txtEmpNo='';
        this.searchfilter.txtReasonForApply='';
      }

      getNext(event: PageEvent) {
        this.offset = event.pageSize * event.pageIndex;
        alert(this.offset);
        // call your api function here with the offset
      }
      onChange(row: any) {
        //alert(row);selectedRow
        if (this.selectedRow === undefined || this.selectedRow.length === 0) {
          this.selectedRow.push(row);
        } else if (this.selectedRow.includes(row)) {
          this.selectedRow = this.selectedRow.filter(
            x => x.payment_reference !== row.payment_reference);
        } else {
          this.selectedRow.push(row);
        }

        console.log(row);
      }
      View():void {
        //alert(this.selectedRow[0].intReqNo);
        console.log(this.selectedRow);
      }
      Approved(row): void {
        const data = {
          intReqNo: row.intReqNo,
          txtReqStatus:'A'
          
        };
        
        console.log('Row clicked: ', row);
        this.IdCardService.CardApproved(data)
          .subscribe(
            response => {
              console.log(response);
              if(response!=null)
              {
                alert("Approved");
                this.readProducts();
                // alert(response);
 
              }
              else
              {
                
              }
            },
            error => {
              console.log(error);
            });
      }

      Reject(data): void {
        // const data = {
        //   intReqNo: row.intReqNo,
        //   txtReqStatus:'R'
          
        // };
        
        //console.log('Row clicked: ', row);
        this.IdCardService.CardReject(data)
          .subscribe(
            response => {
              console.log(response);
              if(response!=null)
              {
                alert("Rejected");
                this.readProducts();
                // alert(response);
 
              }
              else
              {
                
              }
            },
            error => {
              console.log(error);
            });
      }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  isVisible = false;
  advanceVisible = true;
  title = 'appBootstrap';

  closeResult: string;

  p: number = 1;
  displayedColumns: string[] = ['select', 'empNo', 'company', 'requestType', 'location', 'status', 'action', 'idCardView'];
  addNewColumns: string[] =[];
  filter = false;
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  selection = new SelectionModel<any>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  advance_click() {
    // debugger
    if (this.isVisible == false) {
      this.isVisible = true
      this.advanceVisible = false
    } else {
      this.isVisible = false
    }
  }

  close_advance_click() {
    //debugger
    if (this.isVisible == true) {
      this.isVisible = false
      this.advanceVisible = true
    } else {
      this.isVisible = true

      this.advanceVisible = true
    }
  }


  addNewFilter(){
    this.filter=!this.filter;
    this.addNewColumns = this.filter?['header-row-first-group', 
    'header-row-second-group','header-row-third-group',
    'header-row-fourth-group', 
    'header-row-fifth-group','header-row-sixth-group','header-row-sevent-group']:[]
  }

  openDialog(row) {
    const dialogRef = this.dialog.open(RejectReasonComponent, { panelClass: 'custom-dialog-container',data:this.txtRemarksAdmin });

    dialogRef.afterClosed().subscribe(result => {
      // alert(result);
      // console.log(result);
      const data = {
        intReqNo: row.intReqNo,
        txtReqStatus:'R',
        txtRemarksAdmin:result,

      };
      this.Reject(data);
    });
  }

  openEmployeePhotoDialog(row){
    const data = {
      EmpId: row.txtEmpNo,
    };
    
    this.IdCardService.getImg(data)
      .subscribe(
        products => {
          // alert(products);
          //console.log(products);
          this.image=products;
          this.dialog.open(EmployeePhotoComponent, { panelClass: 'custom-dialog-container',data:{data:this.image}});
        },
        error => {
          console.log(error);
        });
  }

  openEmployeeDetailsDialog(){
    const dialogRef = this.dialog.open(EmployeeDetailsComponent, { panelClass: 'custom-dialog-container-mx' });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
