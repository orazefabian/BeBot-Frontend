import { Injectable } from '@angular/core';
import { BeBotServer } from './../environments/environment';
import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  constructor(private HTTPClient) {}

  //TODO: implement requests to bebot server
}
