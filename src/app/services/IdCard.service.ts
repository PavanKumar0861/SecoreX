import { Observable } from "rxjs";
import{Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
// import {IdCard} from '../components/id-card-approval/IdCard.model';
import { HttpHeaders } from '@angular/common/http';

// const baseURL = 'http://192.168.0.39:8067/api/CardRequest/GetCardRequestByStatus';
// const PostURL = 'http://192.168.0.39:8067/api/CardRequest/UpdateIDCardStatus';
// const SearchURL = 'http://192.168.0.39:8067/api/CardRequest/FilterCardRequests';
const baseURL = 'http://192.168.0.138:8066/api/CardRequest/GetCardRequestByStatus';
const PostURL = 'http://192.168.0.138:8066/api/CardRequest/UpdateIDCardStatus';
const SearchURL = 'http://192.168.0.138:8066/api/CardRequest/FilterCardRequests';
const ImgUrl = 'http://192.168.0.39:8067/api/CardRequest/GetEmployeesCardRequestImageByEmpId';


@Injectable({
    providedIn: 'root'
  })
  
  export class IdCardService {
  
    constructor(private httpClient: HttpClient) { }
  
    
    readAll(data): Observable<any[]> {
        return this.httpClient.get<any[]>(`${baseURL}/${data.name}`);
      //return this.httpClient.get(baseURL);
    }
  
    CardApproved(data): Observable<any[]> {
      return this.httpClient.put<any[]>(`${PostURL}/`,data);
    //return this.httpClient.get(baseURL);
    }
    
    CardReject(data): Observable<any[]> {
      return this.httpClient.put<any[]>(`${PostURL}/`,data);
    }

    search(data):Observable<any[]>{
        return this.httpClient.post<any[]>(`${SearchURL}/`,data);
    }

    getImg(data): Observable<any[]> {
      return this.httpClient.get<any[]>(`${ImgUrl}/EmpId?EmpId=${data.EmpId}`);
    //return this.httpClient.get(baseURL);
    }
  }
