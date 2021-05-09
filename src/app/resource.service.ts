import { Injectable } from '@angular/core';
import { BeBotServer } from './../environments/environment';
import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  constructor(private HTTPClient) {}

  prefix: String = BeBotServer.baseURL + '/api/';

  //TODO: implement requests to bebot server
  //getPreviousStats():Observable
}
