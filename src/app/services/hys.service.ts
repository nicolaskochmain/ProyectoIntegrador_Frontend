import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hys } from '../model/hys';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HysService {
  URL = `https://backendap.herokuapp.com/hys/`;

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Hys[]> {
    return this.httpClient.get<Hys[]>(`${this.URL}lista`);
  }

  public detail(id: number): Observable<Hys> {
    return this.httpClient.get<Hys>(`${this.URL}detail/${id}`);
  }

  public save(hys: Hys): Observable<any> {
    return this.httpClient.post<any>(`${this.URL}create`, hys);
  }

  public update(id: number, hys: Hys): Observable<any> {
    return this.httpClient.put<any>(`${this.URL}update/${id}`, hys);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.URL}delete/${id}`);
  }
}
