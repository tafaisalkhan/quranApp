import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'setting',
  templateUrl: 'setting.html'
})
export class SettingComponent {


  translationSelected:string = "urdu";
  sizeSelected:string = "normal";
  constructor(private storage: Storage) {

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
