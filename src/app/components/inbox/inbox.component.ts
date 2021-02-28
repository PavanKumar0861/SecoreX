import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ElementRef, ViewChild, VERSION } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA: any[] = [
  { empNo: 480331, company: 'INFSYS', requestType: 'Damaged Card', location: 'Bangalore', status: 'Submitted', action: 'edit', ambitRequestNo: 2 },
  { empNo: 480331, company: 'INFSYS', requestType: 'Damaged Card', location: 'Bangalore', status: 'Submitted', action: 'edit', ambitRequestNo: 4 },
  { empNo: 480331, company: 'INFSYS', requestType: 'Damaged Card', location: 'Bangalore', status: 'Submitted', action: 'edit', ambitRequestNo: 3 },
  { empNo: 480331, company: 'INFSYS', requestType: 'Damaged Card', location: 'Bangalore', status: 'Submitted', action: 'edit', ambitRequestNo: 2 }

];
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  mobileQuery: MediaQueryList;
  opened: boolean = true;
  // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  // fillerContent = Array.from({length: 50}, () =>
  //     `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  //      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  //      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  //      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  //      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private navService: NavService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnInit(): void {
    
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
