import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth, RoleEnum, User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestHeaderService {

  constructor(private httpClient:HttpClient) { }

  testHeader(){
   return this.httpClient.get<any>("/daw");
  }

}
