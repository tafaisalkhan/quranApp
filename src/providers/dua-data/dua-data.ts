import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DuaDataProvider {

  id: number;
  name: String;
  duaUnicode: String;
  duaTranslation: String;


}
