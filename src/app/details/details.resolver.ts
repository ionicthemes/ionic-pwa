import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DetailsPageResolver implements Resolve<any> {

  constructor(
    private http: HttpClient
  ) { }

  resolve(route: ActivatedRouteSnapshot){
    let slug = route.params['slug'];

    return new Promise((resolve, reject) => {
      this.http.get("/assets/data.json").subscribe(
        res => {
          return resolve(
            res["pwa_features"].find(item => item.slug == slug)
          )
        });
    });
  }
}
