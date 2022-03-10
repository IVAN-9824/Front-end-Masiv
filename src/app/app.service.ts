import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_BASE='http://localhost:8080/logistics'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient  ) { }

  crearUser(user: any){
    return this.http.post(API_BASE+'/createuser', user);
  }

  crearProduct(product: any){
    return this.http.post(API_BASE+'/crearproduct', product);
  }

  crearCellar(storage: any){
    return this.http.post(API_BASE+'/crearstorage', storage);
  }

  public  ListStorage (){
    return this.http.get(API_BASE+'/storage')
    
  }
  public  listProduct (){
    return this.http.get(API_BASE+'/products')
    
  }

}
