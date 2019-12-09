import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OjasService {

  constructor(private http:HttpClient) { }

  getdata(){
     return this.http.get('https://hn.algolia.com/api/v1/search_by_date?tags=story')
  }
  // create(d){
  //   return this.http.post("http://localhost:3000/posts",d);
  // }
  register(register)
  {
    return this.http.post('http://localhost:3000/posts/', register)
  }
}
