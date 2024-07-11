//check older services from diff file
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bake } from '../models/bake';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DessertsService {

  URL: string = "http://localhost:3000/notes";
  constructor(private http: HttpClient) { }
//watch video about what needs to be added to config file to use https
  getBaked(): Observable<Array<Bake>> {
    return this.http.get<Array<Bake>>(this.URL);
  }

  addBake(Bake: Bake) {
    return this.http.post<Bake>(this.URL, Bake);
  }
}

