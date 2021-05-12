import { Injectable } from '@angular/core';
import { BeBotServer } from './../environments/environment';
import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PreviousStats } from 'src/data/previousStats';
import { Prediction } from 'src/data/prediction';
import { PredictionDetails } from 'src/data/predictionDetails';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  constructor(private HTTPClient) {}

  prefix: String = BeBotServer.baseURL + '/api/';

  getPreviousStats(): Observable<PreviousStats> {
    return this.HTTPClient.get(BeBotServer.baseURL + '/api/prevstats');
  }

  getPredictions(): Observable<Prediction> {
    return this.HTTPClient.get(BeBotServer.baseURL + '/api/predict');
  }

  getDetailedPrediction(matchID: number): Observable<PredictionDetails> {
    return this.HTTPClient.get(
      BeBotServer.baseURL + '/api/' + matchID.toString() + '/detailpredict'
    );
  }
}
