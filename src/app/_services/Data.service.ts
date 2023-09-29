import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly apiUrl = 'assets/logements.json';

  constructor(private http: HttpClient) {}

  public getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
        console.log(response);
        return response;
      })
    );
  }

  public getDataById(id: any): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
        if (response && response.data) {
          return response.data.find((item: any) => item.id === id);
        }
        return null;
      })
    );
  }
}
