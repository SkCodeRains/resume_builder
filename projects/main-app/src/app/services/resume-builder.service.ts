import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeBuilderService {

  constructor(private http: HttpClient) { }
  getResumeData(name: string): Observable<any> {
    return this.http.get("./assets/data/skresume.json", { responseType: 'json' }).pipe(
      map((data: any) => {
        return data[name];
      })
    )
  }
}
