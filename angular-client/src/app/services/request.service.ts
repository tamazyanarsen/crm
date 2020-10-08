import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class RequestService {

    constructor(private http: HttpClient) {
    }

    public headers = new HttpHeaders();

    public getToken() {
        return localStorage.getItem('user.auth.token');
    }

    public isAuthenticated() {
        return !!localStorage.getItem('user.auth.token');
    }

    public checkToken() {
        if (this.isAuthenticated()) {
            this.headers = this.headers.set('Authorization', `Token ${this.getToken()}`);
        }
    }

    public post(url, body = {}, opt = {}, needCheckToken = true) {
        if (needCheckToken) {
            this.checkToken();
        } else if (this.headers.get('Authorization')) {
            this.headers = this.headers.delete('Authorization');
        }
        return this.http.post(`${environment.HOST}${url}`, body, Object.assign(opt, { headers: this.headers })).toPromise();
    }

    public get(url, opt = {}) {
        this.checkToken();
        return this.http.get(`${environment.HOST}${url}`, Object.assign(opt, { headers: this.headers })).toPromise();
    }

    public patch(url, body = {}, opt = {}) {
        this.checkToken();
        return this.http.patch(`${environment.HOST}${url}`, body, Object.assign(opt, { headers: this.headers })).toPromise();
    }

    public deleteReq(url, opt = {}) {
        this.checkToken();
        return this.http.delete(`${environment.HOST}${url}`, Object.assign(opt, { headers: this.headers })).toPromise();
    }
}
