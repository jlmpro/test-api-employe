import { DataSource } from '@angular/cdk/collections';
import { AfterViewInit, ChangeDetectorRef, Component, inject } from '@angular/core';
import { OnInit, ViewChild } from '@angular/core';
import {  MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MasterService } from '../../services/master.service';

@Component({
  selector: 'app-employee',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    MatSelectModule,
    MatPaginator
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit, AfterViewInit  {
  deptId : number = 0;
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getParentsDeptList();
  }

  getParentsDeptList(){
    this.masterService.getParentsDept().subscribe((res: ApiResponse) => {
      this.listParentsDept = res.data
    })
  }
 /*  getAllChildsDeptList(){
    this.masterService.getAllChildsDept().subscribe((res: ApiResponse) => {
      this.listChildsDept= res.data;
    })
  } */

    getChildDepartmentByParentId(){

    }

  onDeptChange(){
    debugger
    this.masterService.getChildsDeptByParentId(this.deptId).subscribe((res: ApiResponse) => {
      debugger
      this.listChildsDept = res.data;
      console.log(this.deptId)
      console.log(res.data)
    });
  }

  constructor(private cdr: ChangeDetectorRef) {}
  ngAfterViewInit(): void {
    this.cdr.detectChanges();  }

    foods: Food[] = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'},
    ];

    selected = '';
    selected1 = '';
    selectedFood = this.foods[2].value;

    masterService = inject(MasterService);

    listParentsDept : IParentDept[] = [];
    listChildsDept : IChildDept[] = [];



  ELEMENT_DATA: PeriodicElement[] = [
    {
      position: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H',
      age: 12,
      role: 'admin',
      gender: 'male',
      action: 'ok',
    },
    {
      position: 2,
      name: 'Helium',
      weight: 4.0026,
      symbol: 'He',
      age: 10,
      role: 'admin',
      gender: 'male',
      action: 'ok',
    },
    {
      position: 3,
      name: 'Lithium',
      weight: 6.941,
      symbol: 'Li',
      age: 10,
      role: 'admin',
      gender: 'male',
      action: 'ok',
    },
    {
      position: 4,
      name: 'Beryllium',
      weight: 9.0122,
      symbol: 'Be',
      age: 10,
      role: 'admin',
      gender: 'male',
      action: 'ok',
    },
    {
      position: 5,
      name: 'Boron',
      weight: 10.811,
      symbol: 'B',
      age: 10,
      role: 'admin',
      gender: 'male',
      action: 'ok',
    },
    {
      position: 6,
      name: 'Carbon',
      weight: 12.0107,
      symbol: 'C',
      age: 10,
      role: 'admin',
      gender: 'male',
      action: 'ok',
    },
    {
      position: 7,
      name: 'Nitrogen',
      weight: 14.0067,
      symbol: 'N',
      age: 10,
      role: 'admin',
      gender: 'male',
      action: 'ok',
    },
    {
      position: 8,
      name: 'Oxygen',
      weight: 15.9994,
      symbol: 'O',
      age: 10,
      role: 'admin',
      gender: 'male',
      action: 'ok',
    },
    {
      position: 9,
      name: 'Fluorine',
      weight: 18.9984,
      symbol: 'F',
      age: 10,
      role: 'admin',
      gender: 'male',
      action: 'ok',
    },
    {
      position: 10,
      name: 'Neon',
      weight: 20.1797,
      symbol: 'Ne',
      age: 10,
      role: 'admin',
      gender: 'male',
      action: 'ok',
    },
  ];

  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'age',
    'role',
    'gender',
    'action',
  ];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  @ViewChild(MatPaginator)
  paginator: MatPaginator = new MatPaginator();
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  age?: number;
  role?: string;
  gender?: string;
  action?: string;
}

interface Food {
  value: string;
  viewValue: string;
}

export interface IParentDept{
  
    departmentId: number;
    departmentName: string,
    departmentLogo: string
  
}
export interface IChildDept{
  
    childDeptId: number;
    parentDeptId: number,
    departmentName: string
  
}

export interface ApiResponse{
  message: string;
  result: boolean;
  data: any;
}
