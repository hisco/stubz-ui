import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpControlService {
  // private mainUrl = 'http://localhost:3002/api/v1';
  private mainUrl = 'http://lively-jade.glitch.me/api/v1';

  constructor(private http: HttpClient) { }

  public getPlugins(): Observable<any> {
    return this.http.get(`${this.mainUrl}/plugins`);
  }

  public getVariations(): Observable<any> {
    return this.http.get(`${this.mainUrl}/variations`);
  }

  public updatePluginStatus(pluginStatus: {[key: string]: boolean}): Observable<any> {
    return this.http.patch(`${this.mainUrl}/....`, pluginStatus);
  }
}
