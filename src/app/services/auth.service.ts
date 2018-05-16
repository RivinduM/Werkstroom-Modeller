import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
import {HttpParams} from '@angular/common/http';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http) {
  }

  /**
   * @desc register user
   * @param user
   * @returns {Observable<any>}
   */
  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/users/register', user, {headers: headers}).map(res => res.json());
  }

  /**
   * @desc authenticate user
   * @param user
   * @returns {Observable<any>}
   */
  authenticateUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/users/authenticate', user, {headers: headers}).map(res => res.json());
  }

  /**
   * @desc get user profile
   * @returns {Observable<any>}
   */
  getProfile() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('/users/profile', {headers: headers}).map(res => res.json());
  }

  /**
   * @desc store user data in local storage
   * @param token
   * @param user
   */
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  /**
   * @desc load user token
   */
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  /**
   * @desc check whether a user is logged in
   * @returns {boolean}
   */
  loggedIn() {
    return tokenNotExpired('id_token');
  }

  /**
   * @desc logout
   */
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  /**
   * @desc save workflow
   * @param workflow
   * @returns {Observable<any>}
   */
  saveWorkflow(workflow) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/workflows/save', workflow, {headers: headers}).map(res => res.json());
  }

  /**
   * @desc get workflows of a user
   * @returns {Observable<any>}
   */
  getWorkflows() {
    const headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('/workflows/models', {headers: headers}).map(res => res.json());
  }

  /**
   * delete workflow
   * @param id
   * @returns {Observable<any>}
   */
  deleteWorkflow(id) {
    const body = {id: id};
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/workflows/delete', body, {headers: headers}).map(res => res.json());
  }

  /**
   * check for same name workflows
   * @param id
   * @param name
   * @returns {Observable<any>}
   */
  checkWorkflow(id, name) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/workflows/checkWorkflow', {id: id, name: name}, {headers: headers}).map(res => res.json());
  }

  /* updateWorkflow(id, workflow) {
     const body = {id: id, workflow: workflow};
     const headers = new Headers();
     headers.append('Content-Type', 'application/json');
     return this.http.post('http://localhost:3000/workflows/update', body , {headers: headers}).map(res => res.json());
   }*/
}
