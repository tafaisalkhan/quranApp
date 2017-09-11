import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the SettingComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'setting',
  templateUrl: 'setting.html'
})
export class SettingComponent {

  text: string;
  translationSelected:string = "urdu";
  sizeSelected:string = "normal";
  constructor(private storage: Storage) {
    console.log('Hello SettingComponent Component');
    this.text = 'Hello World';
    storage.get('sizeStore').then((val) => {
      if (val != null){
        this.sizeSelected =  val;
      }
    });

    storage.get('translationStore').then((val) => {
      if (val != null){
         this.translationSelected =  val;
      }
    });
  }

  selectTranlationOption(){
    this.storage.set('translationStore', this.translationSelected);
    console.log(this.translationSelected);
  }


  selectSizeOption(){
    this.storage.set('sizeStore', this.sizeSelected);
    console.log(this.sizeSelected);
  }

}
