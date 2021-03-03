import { Observable } from "rxjs";
import{Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';


// const baseURL = 'http://192.168.0.39:8067/api/CardRequest';
const baseURL = 'http://192.168.0.138:8066/api/CardRequest';


@Injectable({
    providedIn: 'root'
  })
  export class DashboardService {
  
    constructor(private httpClient: HttpClient) { }
  
    NoOfCardsDispatched(name): Observable<any> {
        return this.httpClient.get<any>(`${baseURL}/${name}`);
      //return this.httpClient.get(baseURL);
    }
    NoOfCardsIssued(name): Observable<any> {
        return this.httpClient.get<any>(`${baseURL}/${name}`);
      //return this.httpClient.get(baseURL);
    }
    NoOfCardsApproved(name): Observable<any> {
        return this.httpClient.get<any>(`${baseURL}/${name}`);
      //return this.httpClient.get(baseURL);
    }

  
    
  }
  