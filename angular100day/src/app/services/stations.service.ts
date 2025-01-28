import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CONSTANT } from '../constant/constant';
import { ResponseModel } from '../models/station';

@Injectable({
  providedIn: 'root',
})
export class StationsService {
  apiEndPoint: string = '';

  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.ApiEndPoint;
  }

  getAllStations(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(
      this.apiEndPoint + CONSTANT.ENDPOINTS.GET_ALL_STATION
    );
  }
}
