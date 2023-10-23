import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private _http: HttpClient) { }

  getData(endpoint: string): Observable<any>{
    return this._http.get<any>(`${environment.API}${endpoint}`, { observe: 'response' });
  }
}
