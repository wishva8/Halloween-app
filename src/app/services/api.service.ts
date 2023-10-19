import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  /**
   * Method: POST
   * Params: data, token, endpoint, options
   */
  async post(data: any, token: string, endpoint: string) {
    const customOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'text/plain',
      }),
    };
    return await new Promise((resolve, rejects) => {
      this.http
        .post(environment.baseUrl + endpoint, data, customOptions)
        .subscribe(
          (data: any) => {
            resolve(data);
          },
          (error: any) => {
            rejects(error);
          }
        );
    });
  }

  /**
   * Method: GET
   * Params: token, endpoint, options
   */
  async get(token: string, endpoint: string) {
    const customOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
      }),
    };
    return await new Promise((resolve, rejects) => {
      this.http.get(environment.baseUrl + endpoint, customOptions).subscribe(
        (data: any) => {
          resolve(data);
        },
        (error: any) => {
          rejects(error);
        }
      );
    });
  }

  /**
   * Method: PUT
   * Params: data,token, endpoint, options
   */
  async put(data: any, token: string, endpoint: string) {
    const customOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'text/plain',
      }),
    };
    return await new Promise((resolve, rejects) => {
      this.http
        .put(environment.baseUrl + endpoint, data, customOptions)
        .subscribe(
          (data: any) => {
            resolve(data);
          },
          (error: any) => {
            rejects(error);
          }
        );
    });
  }

  /**
   * Method: DELETE
   * Params: data,token, endpoint, options
   */
  async delete(token: string, endpoint: string) {
    const customOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'text/plain',
      }),
    };
    return await new Promise((resolve, rejects) => {
      this.http.delete(environment.baseUrl + endpoint, customOptions).subscribe(
        (data: any) => {
          resolve(data);
        },
        (error: any) => {
          rejects(error);
        }
      );
    });
  }
}