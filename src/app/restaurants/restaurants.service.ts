import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { ErrorHandler } from './../app.error-handler';
import { MEAT_API } from './../app.api';
import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class RestaurantsService {

    constructor(private _http: Http) {}

    restaurants (): Observable<Restaurant[]> {
      return this
      ._http
      .get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
    }

    restaurantById(id: string): Observable<Restaurant> {
      return this._http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
    }
    
    reviewsOfRestaurant(id: string): Observable<any> {
      return this._http.get(`${MEAT_API}/restaraunts/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]> {
      return this._http.get(`${MEAT_API}/restaraunts/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
    }
}