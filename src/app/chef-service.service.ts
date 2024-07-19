import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChefServiceService {

  constructor(private http:HttpClient) { }

  GetChef():Observable<any>{
    const url="https://localhost:7039/api/Chef";
    return this.http.get<any>(url);
  }
  AddChef(chef:any):Observable<any>{
    const url="https://localhost:7039/api/Chef";
    return this.http.post<any>(url,chef);
  }
  UpdateChef(ChefData:any):Observable<any>{
    const url="https://localhost:7039/api/Chef/"+ChefData;
    return this.http.put<any>(url,ChefData);
  }
  DeleteChef(ChefId:any):Observable<any>{
    const url="https://localhost:7039/api/Chef/"+ChefId;
    return this.http.delete<any>(url,ChefId);
  }
}
