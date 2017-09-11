import { Component, ViewChild, OnInit, Input, OnChanges } from '@angular/core';
import { Slides, NavController, NavParams, ActionSheetController  } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeAudio } from '@ionic-native/native-audio';
import { Media, MediaObject } from '@ionic-native/media';
import { Observable } from 'rxjs/Observable';

import { ContextMenuComponent } from '../context-menu/context-menu';
import { DuaServiceProvider } from '../../providers/dua-service/dua-service';
import { DuaDataProvider } from '../../providers/dua-data/dua-data';
import { DuaConstantProvider } from '../../providers/dua-constant/dua-constant';


/**
 * Generated class for the FavoriteComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'favorite',
  templateUrl: 'favorite.html'
})
export class FavoriteComponent implements OnInit{
  
    @ViewChild(Slides) slides: Slides;
    duas: DuaDataProvider[];
    duaData: any;
    item: any;
    ayah_no: any; ''
    ayah: any;
    translation: any;
    name: any = "No Favorite Duas";
    arabicName: any;
    chapterName: any;
    chapterNo: any;
    filename: any;
    file: MediaObject;
    isPlay:Boolean = false;
    bismillAllah:any;
    duaListArray: any = [];
    tmpDuaListArray: any = [];
    favoriteArray: any =[]
    translationStore: any;
    sizeStore: any;
    platform: string;
    isFavorite : Boolean ; false;
    favoriteCardShow: Boolean = false;
    index: number = 0;
    constructor(private duaServiceProvider: DuaServiceProvider, private nativeAudio: NativeAudio, private media: Media, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, private storage: Storage, private socialSharing: SocialSharing, private duaConstantProvider: DuaConstantProvider ) 
    {
      this.item = this.navParams.get('item');
      console.log(this.item);
     
    
    }
    goToSlide() {
       
        console.log(this.duas);
      }
  
      slideChanged() {
      let currentIndex = this.slides.getActiveIndex();
      console.log('Current index is', currentIndex);
      
      this.loadDataSlideData(currentIndex);
      this.isPlay = false;
      
       
    }
  
    ngOnInit(){
            
             this.loadDataFromFile();
            
     }
  
    loadDataFromFile(){
      try{
        this.platform = this.duaConstantProvider.device;
        this.storage.get('favoriteArrayStore').then((val) => {
          if (val != null){
            this.favoriteArray =  val;
            this.loadData();
          }
          

        });

        this.storage.get('sizeStore').then((val) => {
          if (val != null){
            this.sizeStore =  val;
          }
        });
    
        this.storage.get('translationStore').then((val) => {
          try{
          if (val != null){
             this.translationStore =  val;
            
          }
        }
        catch(e){
  
        }
        });



          this.storage.get('anbiya').then((val) => {
            if (val != null){
                for(let item of val){
                  for(let dua of item.dua){  
                    for(let aya in dua.aya){  
                    
                        this.tmpDuaListArray.push(dua.aya[aya]);
                      //}
                      
                  }
                }
              }
            }
            this.loadData();
          });


  
      }
      catch(e){
  
      }
    }
  

    loadData(){
      try{
        this.duaListArray = [];
        for (let item of this.tmpDuaListArray){
          let temp = this.favoriteArray.filter(favId => favId == item.index);
          if(temp.length > 0){
            this.duaListArray.push(item);
            console.log(this.duaListArray);
            }
           
        }

        if(this.duaListArray.length > 0)
        {
          this.loadDataSlideData(0);
        }
        else{
          this.favoriteCardShow = true;
        }

      }
      catch(e){
  
      }
    }

    unFavorite(){
      this.isFavorite = false;
      var i = this.favoriteArray.indexOf(this.index);
      if(i != -1) {
        this.favoriteArray.splice(i, 1);
      }
      this.storage.set('favoriteArrayStore', this.favoriteArray);
    }
  
    favorite(){
      this.favoriteArray.push(this.index);
      this.storage.set('favoriteArrayStore', this.favoriteArray);
      this.isFavorite = true;
     
    }
    shareDUA(){
     
      this.socialSharing.share(  this.ayah + "  " + this.translation, "Dua Ul Anbiya " + this.name + " "  + this.arabicName , null); 
    }

    loadDataSlideData(index){
      try{
        this.storage.get('translationStore').then((val) => {
          try{
          if (val != null){
             this.translationStore =  val;
            
          }
          this.index = this.duaListArray[index].index;

          let temp = this.favoriteArray.filter(dua => dua == this.index);
          if(temp.length == 0){
            this.isFavorite = false;  
          }
          else{
            this.isFavorite = true; 
          }

          if(this.translationStore == "english"){
            this.translation = this.duaListArray[index].english;
          }
          else if(this.translationStore == "arabic"){
            this.translation = this.duaListArray[index].arabic;
          }
          else if(this.translationStore == "spanish"){
            this.translation = this.duaListArray[index].spanish;
          }
          else if(this.translationStore == "chainses"){
            this.translation = this.duaListArray[index].chinses;
          }
          else if(this.translationStore == "japanses"){
            this.translation = this.duaListArray[index].japanses;
          }
          else if(this.translationStore == "turkish"){
            this.translation = this.duaListArray[index].turkish;
          }
          else if(this.translationStore == "urdu"){
            this.translation = this.duaListArray[index].urdu;
          }
  
        }
        catch(e){
  
        }
        });
       
        if(this.translation == undefined || this.translation == null){
          this.translation = this.duaListArray[index].english;
        }


        this.ayah_no = this.duaListArray[index].aya_no
        this.name = this.duaListArray[index].name;
        this.arabicName = this.duaListArray[index].arabic_name
        this.chapterName = this.duaListArray[index].chapter_name;
        this.chapterNo = this.duaListArray[index].chapter_no;
        this.ayah = this.duaListArray[index].arabic;
         
        this.bismillAllah = this.duaListArray[index].bismial;
        this.filename = this.duaListArray[index].mp3_file_path;

  
      }
      catch(e){
  
      }
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
     
  
       }
  
      stopDua(fileName: String){
        this.isPlay = false;
         
          try{
            this.file.pause();
          }
          catch(e){

          }
  
         
      
        }
  
  onSuccess(data){
    console.log(data);
    this.isPlay = !this.isPlay;
  }
  
  onError(data){
    console.log(data);
    this.isPlay = !this.isPlay;
  }
     
  }
  