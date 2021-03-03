import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ElementRef, ViewChild, VERSION } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import {CommonService} from '../../services/common.service';
import {IdCardService} from '../../services/IdCard.service';
import {PageEvent,MatPaginator} from '@angular/material/paginator';

const ELEMENT_DATA: any[] = [
  // { empNo: 480331, company: 'INFSYS', requestType: 'Damaged Card', location: 'Bangalore', status: 'Submitted', action: 'edit', ambitRequestNo: 2 },
  // { empNo: 480331, company: 'INFSYS', requestType: 'Damaged Card', location: 'Bangalore', status: 'Submitted', action: 'edit', ambitRequestNo: 4 },
  // { empNo: 480331, company: 'INFSYS', requestType: 'Damaged Card', location: 'Bangalore', status: 'Submitted', action: 'edit', ambitRequestNo: 3 },
  // { empNo: 480331, company: 'INFSYS', requestType: 'Damaged Card', location: 'Bangalore', status: 'Submitted', action: 'edit', ambitRequestNo: 2 }

];
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  mobileQuery: MediaQueryList;
  opened: boolean = true;
  company: any[];
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

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private navService: NavService,private IdCardService: IdCardService,private commonsercive:CommonService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
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
          txtReqStatus: this.searchfilter.txtReqStatus,
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
        this.searchfilter.txtReqStatus='';
      }

      getNext(event: PageEvent) {
        this.offset = event.pageSize * event.pageIndex;
        //alert(this.offset);
        // call your api function here with the offset
      }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  isVisible = false;
  advanceVisible = true;
  title = 'appBootstrap';

  closeResult: string;

  p: number = 1;
  displayedColumns: string[] = ['select', 'empNo',  'company','ambitRequestNo', 'requestType', 'location', 'status', 'action'];
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

  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }
  addNewFilter(){
    this.filter=!this.filter;
    this.addNewColumns = this.filter?['header-row-first-group', 
    'header-row-second-group','header-row-third-group',
    'header-row-fourth-group', 
    'header-row-fifth-group','header-row-sixth-group','header-row-seventh-group','header-row-eighth-group']:[]
  }
}
