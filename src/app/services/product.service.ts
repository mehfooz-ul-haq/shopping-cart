import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  listProducts(): Observable<any> {
    return this.http.get(`/api/products`).pipe(
      tap(async (result: any) => {
        return result;
      })
    );
  }

}
