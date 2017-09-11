import { Component, ViewChild, OnInit, Input, OnChanges } from '@angular/core';
import { Slides, NavController, NavParams, ActionSheetController  } from 'ionic-angular';

import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeAudio } from '@ionic-native/native-audio';
import { Media, MediaObject } from '@ionic-native/media';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { ContextMenuComponent } from '../context-menu/context-menu';
import { DuaServiceProvider } from '../../providers/dua-service/dua-service';
import { DuaDataProvider } from '../../providers/dua-data/dua-data';
import { DuaConstantProvider } from '../../providers/dua-constant/dua-constant';

/**
 * Generated class for the DuaDetailComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'dua-detail',
  templateUrl: 'dua-detail.html'
})
export class DuaDetailComponent implements OnInit{

  @ViewChild(Slides) slides: Slides;
  duas: DuaDataProvider[];
  duaData: any;
  item: any;
  ayah_no: any; ''
  ayah: any;
  translation: any;
  name: any;
  arabicName: any;
  chapterName: any;
  chapterNo: any;
  filename: any;
  file: MediaObject;
  isPlay:Boolean = false;
  bismillAllah:any;
  sizeStore: string = "normal";
  translationStore: any = "english";
  isFavorite : Boolean ; false;
  currentIndex: any = 0 ;
  favoriteArray: any = [];
  favoriteArrayStore: any = [];
  favoriteDUAArray: any = [];
  duaIndex: any = 0;
  platform: string;
  constructor(private duaServiceProvider: DuaServiceProvider, private nativeAudio: NativeAudio, private media: Media, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, private storage: Storage, private socialSharing: SocialSharing, private duaConstantProvider: DuaConstantProvider)
  {
    this.item = this.navParams.get('item');
    console.log(this.item);
    this.duaData = this.item.dua;
    debugger;


  
  }
  goToSlide() {
      //this.slides.slideTo(2, 500);
      console.log(this.duas);
    }

    slideChanged() { 
      this.isFavorite = false  
      this.currentIndex = this.slides.getActiveIndex();
      console.log('Current index is', this.currentIndex);
      
      this.loadData(this.currentIndex);
      this.isPlay = false;
      
    //this.file.pause();
    //this.file.release()
     
  }

  ngOnInit(){
          
           this.loadData(0);
          
   }

  loadData(index){
    try{

      this.platform = this.duaConstantProvider.device;

      this.storage.get('favoriteArrayStore').then((val) => {
        if (val != null){
          this.favoriteArray =  val;
        }
      });

      this.storage.get('sizeStore').then((val) => {
        if (val != null){
          this.sizeStore =  val;
        }
      });
  
      this.storage.get('translationStore').then((val) => {
        try{
          let temp = this.favoriteArray.filter(dua => dua == this.duaIndex);
          if(temp.length == 0){
            this.isFavorite = false;  
          }
          else{
            this.isFavorite = true; 
          }
            
        if (val != null){
           this.translationStore =  val;
           if(this.translationStore == "english"){
            this.translation = this.duaData[index].aya[0].english;
          }
          else if(this.translationStore == "arabic"){
            this.translation = this.duaData[index].aya[0].arabic;
          }
          else if(this.translationStore == "spanish"){
            this.translation = this.duaData[index].aya[0].spanish;
          }
          else if(this.translationStore == "chainses"){
            this.translation = this.duaData[index].aya[0].chinses;
          }
          else if(this.translationStore == "japanses"){
            this.translation = this.duaData[index].aya[0].japanses;
          }
          else if(this.translationStore == "turkish"){
            this.translation = this.duaData[index].aya[0].turkish;
          }
          else if(this.translationStore == "urdu"){
            this.translation = this.duaData[index].aya[0].urdu;
          }

        }
      }
      catch(e){

      }
      });
      if(this.translation == undefined || this.translation == null){
        this.translation = this.duaData[index].aya[0].english;
      }
      this.ayah_no = this.duaData[index].aya[0].aya_no
      this.name = this.item.name;
      this.arabicName = this.item.arabic_name
      this.chapterName = this.duaData[index].chapter_name;
      this.chapterNo = this.duaData[index].chapter_no;
      this.ayah = this.duaData[index].aya[0].arabic;
      this.duaIndex = this.duaData[index].aya[0].index;
  

     
      this.bismillAllah = this.duaData[index].aya[0].bismial;
      this.filename = this.duaData[index].aya[0].mp3_file_path;

      //let temp = this.favoriteArray.filter(dua => dua == this.duaIndex);
     // if(temp.length == 0){
      //  this.isFavorite = false;  
      //}
     // else{
      //  this.isFavorite = true; 
     // }

    }
    catch(e){

    }
  }

  unFavorite(){
    debugger;
    this.isFavorite = false;
    //this.favoriteArray.slice(this.duaIndex);
    var i = this.favoriteArray.indexOf(this.duaIndex);
    //this.favoriteArray = this.favoriteArray.splice(this.duaIndex, 1)
    if(i != -1) {
      this.favoriteArray.splice(i, 1);
    }
    this.storage.set('favoriteArrayStore', this.favoriteArray);
  }

  favorite(){
    debugger;;
    this.favoriteArray.push(this.duaIndex);
    this.storage.set('favoriteArrayStore', this.favoriteArray);
    this.isFavorite = true;
   
  }

  shareDUA(){
    this.socialSharing.share(  this.ayah + "  " + this.translation       , "Dua Ul Anbiya " + this.name + " "  + this.arabicName , null); 
  }



presentActionSheet() {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'Dua Action',
    buttons: [
      {
        text: 'Play',
        role: 'play',
        handler: () => {
          this.playDua();
        }
      },{
        text: 'Share',
        role: 'share',
        handler: () => {
          console.log('Archive clicked');
        }
      },{
        text: 'Favorite',
        role: 'favorite',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
  }
   playDua(){
    
    if(this.isPlay){
      this.file.pause();
      this.file.release();
    }
    else{

          this.file = this.media.create('assets/mp3/'+this.filename);

          // to listen to plugin events:

          this.file.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes

          this.file.onSuccess.subscribe(() => { console.log('Action is successful'); this.isPlay = false}
            );

          this.file.onError.subscribe(error => { console.log('Error!', error); this.isPlay = false} );

          // play the file
          this.file.play();
      }
     this.isPlay = !this.isPlay;
    //this.isPlay = !this.isPlay;
        // pause the file
        //file.pause();

        // get current playback position
        //file.getCurrentPosition().then((position) => {
        //  console.log(position);
        //});

        // get file duration
        //let duration = file.getDuration();//
        //console.log(duration);

        // skip to 10 seconds (expects int value in ms)
        //file.seekTo(10000);

        // stop playing the file
        //file.stop();

        // release the native audio resource
        // Platform Quirks:
        // iOS simply create a new instance and the old one will be overwritten
        // Android you must call release() to destroy instances of media when you are done
        //file.release();

     }

    stopDua(fileName: String){
      this.isPlay = false;
        //this.file = this.media.create('assets/mp3/'+fileName);

        // to listen to plugin events:

        //this.file.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes

        //this.file.onSuccess.subscribe(() => console.log('Action is successful'));

        //this.file.onError.subscribe(error => console.log('Error!', error));

        // play the file
        //this.file.play();

        // pause the file
        try{
          this.file.pause();
        }
        catch(e){
          
        }

        // get current playback position
        //file.getCurrentPosition().then((position) => {
        //  console.log(position);
        //});

        // get file duration
        //let duration = file.getDuration();//
        //console.log(duration);

        // skip to 10 seconds (expects int value in ms)
        //file.seekTo(10000);

        // stop playing the file
        //file.stop();

        // release the native audio resource
        // Platform Quirks:
        // iOS simply create a new instance and the old one will be overwritten
        // Android you must call release() to destroy instances of media when you are done
        //file.release();
    
      }

onSuccess(data){
  console.log(data);
  this.isPlay = !this.isPlay;
}


onError(data){
  console.log(data);
  this.isPlay = !this.isPlay;
}
   //loadDua(){

    // this.nativeAudio.preloadSimple('uniqueId1', 'assets/mp3/bismillah.mp3').then(this.onSuccess, this.onError);

    // this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));
      //var t = JSON.parse(this.jsonObject);
      //console.log(t);
      //console.log(JSON.stringify(this.jsonObject));
          // Get all comments
    //  var json =   this.duaServiceProvider.getDUA()
    //                       .subscribe(data => {
//
//
  //        console.log(data);
    //    this.ayah =  data.verses['977']['2'].ayah.text
//
//
//
  //      },(err) => {console.log(err);
    //          ;
//
//
  //     }
  //  );

   // var json =   this.duaServiceProvider.getDUAList()
   // .subscribe(data => {//
//
//
  //    console.log(data);
      
//
//
//
  //    },(err) => {console.log(err);
    //  ;

//
  //    }
    //  );


    //
     // console.log(json);
   // }



}