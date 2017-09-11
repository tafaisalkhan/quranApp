/* * * ./app/comments/components/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DuaDataProvider } from '../dua-data/dua-data';
/*
  Generated class for the DuaServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DuaServiceProvider {

  // Resolve HTTP using the constructor
      constructor (private http: Http) {}
      // private instance variable to hold base url
     // private commentsUrl = 'http://localhost:3000/api/comments';
     private duaUrl = '/assets/json/adam1.txt';
     //private duaUrl = '[{"id": 1,"name": "A green door","price": 12.50,"tags": ["home", "green"]}]';

      // Fetch all existing comments
      getDUA(jsonfile: String) : Observable<any>{
          // ...using get request
         
        //  return this.http.get("http://ergast.com/api/f1/2004/1/results.json")
        //                 // ...and calling .json() on the response to return data
        //                  .map((res:Response) => res.json())
        //                  //...errors if any
        //                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

          return this.http.get("assets/json/"+jsonfile+".json")
          //return this.http.get("https://firebasestorage.googleapis.com/v0/b/duaulanbiya-5a433.appspot.com/o/duaList.json?alt=media&token=757dde72-3b07-4321-9473-42cb9d46b1ba")
                         // ...and calling .json() on the response to return data
                          .map((res:Response) => res.json())
                          //...errors if any
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

      }

      getDUAList() : Observable<any>{
        // ...using get request
       
      //  return this.http.get("http://ergast.com/api/f1/2004/1/results.json")
      //                 // ...and calling .json() on the response to return data
      //                  .map((res:Response) => res.json())
      //                  //...errors if any
      //                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     // https://firebasestorage.googleapis.com/v0/b/duaapplication-a2d7f.appspot.com/o/duaList.json?alt=media&token=692ca14e-8287-4740-b2d8-b3747f4145cc
        return this.http.get("assets/json/duaList.json")
      // return this.http.get("https://firebasestorage.googleapis.com/v0/b/duaulanbiya-5a433.appspot.com/o/duaList.json?alt=media&token=757dde72-3b07-4321-9473-42cb9d46b1ba")
                       // ...and calling .json() on the response to return data
                        .map((res:Response) => res.json())
                        //...errors if any
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

helloo(){
    return this.http.get("http://ergast.com/api/f1/2004/1/results.json").map((data : Response) => <any> data.json())
     .catch((error:any) => Observable.throw (error.json().error || 'Server error'));;
}


}
