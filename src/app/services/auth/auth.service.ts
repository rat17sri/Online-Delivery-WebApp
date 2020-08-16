import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(loginDetails) {
    return this.httpClient.post('', loginDetails);
  }

  register(formValue) {
    return this.httpClient.post('', formValue);
  }

  
}
