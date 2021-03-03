import { Observable } from "rxjs";
import{Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';

// const baseURL = 'http://192.168.0.39:8067/api/Login/ValidateCredential';
const baseURL = 'http://192.168.0.138:8066/api/Login/ValidateCredential';


@Injectable({
    providedIn: 'root'
  })
  export class LoginService {
  
    constructor(private httpClient: HttpClient) { }
  
    create(data): Observable<any> {
        return this.httpClient.get(`${baseURL}/${data.emailId},${data.password}`,);
      }
  }
  