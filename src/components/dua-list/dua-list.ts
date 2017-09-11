import { Component } from '@angular/core';
import { NavController, Platform} from 'ionic-angular';
import { DuaDetailComponent } from "../dua-detail/dua-detail";
import { DuaServiceProvider } from '../../providers/dua-service/dua-service';
import { DuaConstantProvider } from '../../providers/dua-constant/dua-constant';
import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the DuaListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
const  options = {
  //ios
  adId: 'ca-app-pub-6025676747290907/1413702722',
  //android
  //adId:'ca-app-pub-6025676747290907~9728949660',
  adSize: 'SMART_BANNER',
  isTesting: false
};
@Component({
  selector: 'dua-list',
  templateUrl: 'dua-list.html'
})


export class DuaListComponent {

  text: string;
  duaListArray: any = [];
  completeData: any;
  platform: string;

   
  constructor(public navCtrl: NavController, private duaServiceProvider: DuaServiceProvider, private storage: Storage, public plt: Platform, private duaConstantProvider: DuaConstantProvider, private admobFree: AdMobFree ) {
    this.loadDua();
    //this.admobFree.banner.config(options);
    
  
  }

duaList(){

    this.navCtrl.push(DuaDetailComponent, {
    });

  }

loadDua(){
  //check for local storage

  this.storage.get('anbiya').then((val) => {
    if (val != null){
      this.duaListArray =  val;
    }
    else
    {
        this.duaServiceProvider.getDUAList()
        .subscribe(data => {
            this.duaListArray = data['Dua'].anbiya;
            this.completeData = data;
            this.storage.set('anbiya', this.duaListArray);
            this.storage.set('completeData', this.completeData);
            debugger;

          },
        (err) => {console.log(err);
      
      
          }
          );
        }

       // this.admobFree.banner.prepare()
       // .then(() => {
         // this.admobFree.banner.show();
       // })
       // .catch(e => console.log(e));
        console.log(this.duaListArray);
  });


  /*this.duaServiceProvider.getDUAList()
  .subscribe(data => {
      this.duaListArray = data['Dua'].anbiya;
      this.completeData = data;
      debugger;
  
      this.admobFree.banner.prepare()
      .then(() => {
        this.admobFree.banner.show();
      })
      .catch(e => console.log(e));
      console.log(this.duaListArray);
      

    },
   (err) => {console.log(err);


    }
    );*/
    if (this.plt.is('iphone')) {
      // This will only print when on iOS
      console.log('I am an mobile device!');
      this.duaConstantProvider.device= "small";
      this.platform = "small";
    }
    else if (this.plt.is('ipad')) {
      // This will only print when on iOS
      console.log('I am an ipad device!');
      this.duaConstantProvider.device= "large";
      this.platform = "large";
    }

    else if (this.plt.is('tablet')) {
      // This will only print when on iOS
      console.log('I am an tablet device!');
      this.duaConstantProvider.device= "large";
      this.platform = "large";
    }
    else if (this.plt.is('mobile')) {
      // This will only print when on iOS
      console.log('I am an mobile device!');
      this.duaConstantProvider.device= "small";
      this.platform = "small";
    }
    else{
      console.log('I am an browser device!');
    }
 

  }

  itemTapped(evnet :any , item: any){
    
    //console.log(this.nativeStorage.getItem('item')
    //.then(
    //  data => console.log(data),
    //  error => console.error(error)
   // ));
    
    this.navCtrl.push(DuaDetailComponent, {
      item: item
    });

   

}

}

