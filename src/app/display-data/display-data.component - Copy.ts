import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatIconModule} from '@angular/material/icon';
import { ChefServiceService } from '../chef-service.service';
import { error } from 'console';


@Component({
  selector: 'app-display-data',
  standalone: true,
  imports: [AgGridAngular,FormsModule,CommonModule,MatIconModule],
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})

export class DisplayDataComponent implements OnInit {
  ChefList: any[] = [];
  ChefObj:any={
    "id":"",
    "name":"",
    "mobile":"",
    "email":"",
    "address":""
  }

  colDefs: ColDef[] = [
    {field: "id",headerName:'User Id',headerCheckboxSelection:true,
     
      cellRenderer:(item:any)=>{
        return "Chef-"+item.value
      },
    },
    { field: "name" ,filter:'agTextColumnFilter'},
    { field: "mobile" },
    { field: "email" ,editable:true },
    { field: "address" },
    {
      headerName: 'Notes',
      field: 'actions',
      cellRenderer: 
        `<button (click)="deleteChef(id)">Delete</button>`
      }
  ];

  defaultColDef={
    flex:1,
    minwidth:100
  }
  public rowSelection:'single' |'multiple'='multiple';
  
  url: string = '/Users.json'; 
  addForm =false;
  
  showForm(){
    this.addForm=true;
  }
  CancleForm() {
    this.addForm = false;
  }

  constructor(private ChefService:ChefServiceService) {}

  ngOnInit(): void {
    this.getChef();
  }

  getChef() {
    this.addForm=false;
    this.ChefService.GetChef().subscribe(data =>{
      this.ChefList = data;
    });
  }
  
   onCreateChef(ChefObj:any){
    this.ChefService.AddChef(ChefObj.value).subscribe(data=>{
      this.getChef();
    },
  error=>{
    console.log(error);
    this.getChef();
  });
   }

  deleteChef(id: any) {
    if (confirm('Are you sure you want to delete this student?')) {
      this.ChefService.DeleteChef(id).subscribe(
        () => {
          console.log('Chef deleted successfully');
          this.getChef();
        },
        (error) => {
          console.error('Error deleting chef:', error);
        }
      );
    }
    // this.ChefList = this.ChefList.filter(chef => chef.id !== id);
    // localStorage.setItem('userList', JSON.stringify(this.ChefList));
  }
}
