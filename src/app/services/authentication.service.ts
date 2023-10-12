import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiConstants } from '../shared/constants/api.constants';
import { LoginPayload } from '../shared/models/authentication.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  onLogin(loginPayload: LoginPayload) {
    return this.http.post(
      `${environment.apiurl}${ApiConstants.onLogin()}`,
      loginPayload,
      { withCredentials: true }
    );
  }
}
