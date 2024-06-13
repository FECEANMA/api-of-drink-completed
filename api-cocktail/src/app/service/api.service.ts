import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL: string = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
  constructor(private httpClient: HttpClient) { }

  getDrinks(): Observable<any>{
    return this.httpClient.get(this.API_URL).pipe(res=> res);
  }
}
