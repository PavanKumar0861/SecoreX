import { Observable } from "rxjs";
import{Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';


// const baseURL = 'http://192.168.0.39:8067/api/ODC';
const baseURL = 'http://192.168.0.138:8066/api/ODC';


@Injectable({
    providedIn: 'root'
  })
  export class ChartService {
  
    constructor(private httpClient: HttpClient) { }
  
    barChart(data): Observable<any> {
        return this.httpClient.get<any>(`${baseURL}/${data.name}/${data.empno}`);
      //return this.httpClient.get(baseURL);
    }
    LineChart(data): Observable<any> {
      // alert(data.name);
      // alert(data.empno);
        return this.httpClient.get<any>(`${baseURL}/${data.name}/${data.empno}`);
      //return this.httpClient.get(baseURL);
    }
  
    
  }
  