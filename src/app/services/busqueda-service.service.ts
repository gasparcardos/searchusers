import { Injectable } from '@angular/core';

import { BusquedaInterface  } from '../interfaces/busqueda-interface';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusquedaServiceService {

  cachedValues: { [query: string]: BusquedaInterface } = {};

  constructor(private http: HttpClient) { this.http = http }

  busqueda = (query: string): Promise<BusquedaInterface> => {
    let promise = new Promise<BusquedaInterface>((resolve, reject) => {​​​ 
      if (this.cachedValues[query]) {​​​
        resolve(this.cachedValues[query])
      }​​​else{​​​
        this.http.get('https://api.github.com/search/users?q=' + query)
        .toPromise()
        .then( (response) => {​​​
          resolve(response as BusquedaInterface)
        }​​​, (error) => {​​​
          reject(error);
        }​​​);
      }
    });
    return promise;
  }
}
