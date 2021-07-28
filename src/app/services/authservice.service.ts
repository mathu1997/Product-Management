import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }
  login(data:any):Observable<any>{
    return this.http.post('http://localhost:49700/api/Token/auth',data);
  }
}
