import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

interface EncoderResponse {
  result: string;
}

@Injectable({
  providedIn: 'root'
})
export class EncoderService {

  constructor(private http: HttpClient) { }

  encode(input: string): Observable<string> {
    const route = environment.wsBaseUrl + '/encoder';

    return this.http.post<EncoderResponse>(route, { input }).pipe(
      map(encoderResponse => encoderResponse.result)
    );
  }
}
